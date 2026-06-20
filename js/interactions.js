function initPageLoadAnimation() {
  requestAnimationFrame(() => document.body.classList.add('page-loaded'));
}

function initScrollProgress() {
  const progress = document.getElementById('scrollProgress');
  if (!progress || progress.dataset.ready === 'true') return;

  progress.dataset.ready = 'true';

  function updateProgress() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const amount = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progress.style.width = `${amount}%`;
  }

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal:not([data-reveal-ready="true"])');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  elements.forEach((element) => {
    element.dataset.revealReady = 'true';
    observer.observe(element);
  });
}

function initInteractiveTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.interactive-tilt:not([data-tilt-ready="true"])').forEach((card) => {
    card.dataset.tiltReady = 'true';

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = x / rect.width;
      const py = y / rect.height;
      const rotateY = (px - 0.5) * 5;
      const rotateX = (0.5 - py) * 5;

      card.style.setProperty('--rx', `${rotateX}deg`);
      card.style.setProperty('--ry', `${rotateY}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

function destroyGravitySkills(board) {
  if (board && typeof board._gravityCleanup === 'function') {
    board._gravityCleanup();
    board._gravityCleanup = null;
  }
}

function initGravitySkills() {
  const board = document.getElementById('gravitySkills');

  if (!board || typeof Matter === 'undefined') return;
  if (board.dataset.physicsReady === 'true') return;

  const {
    Engine,
    Runner,
    Bodies,
    Composite,
    Mouse,
    MouseConstraint,
    Events
  } = Matter;

  const engine = Engine.create();
  engine.gravity.y = 0.85;

  const runner = Runner.create();
  const bubbleElements = Array.from(board.querySelectorAll('.gravity-bubble'));
  const bubbleBodies = [];
  let walls = [];

  board.dataset.physicsReady = 'true';

  function buildWalls() {
    if (walls.length) Composite.remove(engine.world, walls);

    const width = board.clientWidth;
    const height = board.clientHeight;
    const thickness = 80;

    walls = [
      Bodies.rectangle(width / 2, height + thickness / 2, width + thickness * 2, thickness, { isStatic: true }),
      Bodies.rectangle(-thickness / 2, height / 2, thickness, height + thickness * 2, { isStatic: true }),
      Bodies.rectangle(width + thickness / 2, height / 2, thickness, height + thickness * 2, { isStatic: true }),
      Bodies.rectangle(width / 2, -thickness / 2, width + thickness * 2, thickness, { isStatic: true })
    ];

    Composite.add(engine.world, walls);
  }

  function createBubbles() {
    const width = board.clientWidth;
    const safeWidth = Math.max(width - 180, 120);

    bubbleElements.forEach((bubble, index) => {
      const bubbleWidth = bubble.offsetWidth;
      const bubbleHeight = bubble.offsetHeight;
      const x = 60 + ((index * 137) % safeWidth);
      const y = 42 + (index % 4) * 28;

      const body = Bodies.rectangle(x, y, bubbleWidth, bubbleHeight, {
        chamfer: { radius: bubbleHeight / 2 },
        restitution: 0.5,
        friction: 0.08,
        frictionAir: 0.018,
        density: 0.002
      });

      body.plugin.element = bubble;
      body.plugin.width = bubbleWidth;
      body.plugin.height = bubbleHeight;

      bubbleBodies.push(body);
    });

    Composite.add(engine.world, bubbleBodies);
  }

  buildWalls();
  createBubbles();

  const mouse = Mouse.create(board);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.22,
      damping: 0.08,
      render: { visible: false }
    }
  });

  Composite.add(engine.world, mouseConstraint);

  Events.on(mouseConstraint, 'startdrag', (event) => {
    const element = event.body?.plugin?.element;
    if (element) element.classList.add('is-dragging');
  });

  Events.on(mouseConstraint, 'enddrag', (event) => {
    const element = event.body?.plugin?.element;
    if (element) element.classList.remove('is-dragging');
  });

  Events.on(engine, 'afterUpdate', () => {
    bubbleBodies.forEach((body) => {
      const element = body.plugin.element;
      const width = body.plugin.width;
      const height = body.plugin.height;

      if (!element || !element.isConnected) return;

      element.style.transform = `
        translate(${body.position.x - width / 2}px, ${body.position.y - height / 2}px)
        rotate(${body.angle}rad)
      `;
    });
  });

  Runner.run(runner, engine);

  let resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildWalls, 150);
  }

  window.addEventListener('resize', onResize);

  board._gravityCleanup = () => {
    Runner.stop(runner);
    window.removeEventListener('resize', onResize);
    Composite.clear(engine.world, false);
    Engine.clear(engine);
    board.dataset.physicsReady = 'false';
  };
}

function initCommonInteractions() {
  initPageLoadAnimation();
  initScrollProgress();
  initScrollReveal();
  initInteractiveTilt();
}
