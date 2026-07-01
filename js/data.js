/*
  EDIT THIS FILE ONLY for:
  1. Arabic / English site text
  2. Skills
  3. Projects

  Add a new project by copying one object inside portfolioData.projects.
  Then the home card and project detail page will update automatically.
*/

const portfolioData = {
  defaultLanguage: "ar",

  ui: {
    en: {
      logoName: "Ruba Alghamdi",
      navWork: "Work",
      navSkills: "What I bring",
      navClients: "Contact",
      navAbout: "About",

      heroEyebrow: "UX/UI Designer · Computer Science",
      heroTitle: "I turn your idea into a digital experience users love.",
      heroText:
        "I help organize the idea, build the user flow, and design interfaces that support your goal and fit your users.",
      viewWork: "View work",
      contactMe: "Contact me",
      introStrip:
        "“You can't use up creativity. The more you use, the more you have.” – Maya Angelou",

      projectsEyebrow: "Selected Work",
      projectsTitle: "Selected projects",
      projectsText:
        "A selection of my projects, giving you a glimpse of how I turn ideas into clear, organized, and usable interfaces.",

      skillsEyebrow: "What I bring",
      skillsTitle: "Every step your digital product needs.",
      skillsText:
        "Whether you need a full experience built from scratch or help with one specific part, I can work with you on what your project actually needs.",

      contactEyebrow: "Start a Project",
      contactTitle: "Start your idea with me.",
      contactText:
        "If you have an idea you haven’t started yet, or a project stuck at a certain point, send me the details and I’ll help you move it forward more clearly.",
      clientBubble01: "“Clear and easy to follow.”",
      clientBubble02: "“The idea became more organized.”",
      clientBubble03: "“Creative, thoughtful, and clean.”",
      formName: "Name",
      formEmail: "Email",
      formProject: "Project type",
      formMessage: "Message",
      formNamePlaceholder: "Your name",
      formEmailPlaceholder: "Your email",
      formProjectPlaceholder: "Website, app, dashboard...",
      formMessagePlaceholder: "Tell me about the project...",
      sendMessage: "Send message",

      aboutEyebrow: "About",
      aboutTitle:
        "I design interfaces that understand the user and support the idea.",
      aboutP1:
        "I’m Ruba Alghamdi, a UX/UI designer with a Computer Science background. I enjoy working on digital products from the idea stage to the final interface: organizing information, building user flows, and designing screens that feel simple and enjoyable to use.",
      aboutP2:
        "For me, good design makes the product easier for users to understand, and better for clients to present, launch, and grow.",
      aboutTag01: "Creative perspective",
      aboutTag02: "Interfaces that work for you and your users",
      aboutTag03: "Development-aware execution",

      backToProjects: "← Back to projects",
      roleLabel: "Role",
      toolsLabel: "Tools",
      deliverablesLabel: "Deliverables",
      viewPrototype: "View prototype",
      viewPresentationPdf: "View presentation PDF",
      caseSnapshot: "Project snapshot",
      projectNotFoundTitle: "Project not found",
      projectNotFoundText:
        "The project link is missing or does not match a saved project ID.",

      email: "Email",
      backTop: "Back to top ↑",
    },

    ar: {
      logoName: "ربى الغامدي",
      navWork: "المشاريع",
      navSkills: "وش أقدم",
      navClients: "تواصل",
      navAbout: "عنّي",

      heroEyebrow: "مصممة UX/UI بخلفية في علوم الحاسب",
      heroTitle: "احول فكرتك إلى تجربة رقمية يحبها المستخدم.",
      heroText:
        "أساعدك في ترتيب الفكرة، بناء مسار المستخدم، وتصميم واجهات تخدم هدفك وتناسب مستخدمينك.",
      viewWork: "استعراض الأعمال",
      contactMe: "تواصل معي",
      introStrip:
        "“ما تقدر تستهلك الإبداع. كل ما تستخدمه، كل ما صار عندك أكثر.” – مايا أنجيلو",

      projectsEyebrow: "أعمال مختارة",
      projectsTitle: "مشاريع مختارة",
      projectsText:
        "هذه مختارات من مشاريعي، تعطيك لمحة عن أسلوبي في تحويل الأفكار إلى واجهات واضحة، مرتبة، وقابلة للاستخدام.",

      skillsEyebrow: "وش أقدم",
      skillsTitle: "كل خطوة تحتاجها في المنتج الرقمي.",
      skillsText:
        "سواء تحتاج بناء تجربة كاملة، أو مساعدة في خطوة معينة، أقدر أشتغل معك على الجزء اللي يخدم مشروعك فعلًا.",

      contactEyebrow: "ابدأ مشروعك",
      contactTitle: "ابدأ فكرتك معي.",
      contactText:
        "لو عندك فكرة ما بدأت، أو مشروع واقف عند نقطة معينة، أرسل لي التفاصيل وبساعدك تكملها بطريقة أوضح.",
      clientBubble01: "“واضح وسهل المتابعة.”",
      clientBubble02: "“الفكرة صارت أرتب.”",
      clientBubble03: "“إبداعي، مدروس، ونظيف.”",
      formName: "الاسم",
      formEmail: "الإيميل",
      formProject: "نوع المشروع",
      formMessage: "الرسالة",
      formNamePlaceholder: "اكتب اسمك",
      formEmailPlaceholder: "اكتب إيميلك",
      formProjectPlaceholder: "موقع، تطبيق، داشبورد...",
      formMessagePlaceholder: "اكتب تفاصيل المشروع...",
      sendMessage: "إرسال الرسالة",

      aboutEyebrow: "عنّي",
      aboutTitle: "أصمم واجهات تفهم المستخدم وتخدم الفكرة.",
      aboutP1:
        "أنا ربى الغامدي، مصممة UX/UI بخلفية في علوم الحاسب. أحب أشتغل على المنتجات الرقمية من مرحلة الفكرة إلى الواجهة النهائية: أرتب المعلومات، أبني مسارات المستخدم، وأصمم شاشات بسيطة وممتعة في الاستخدام.",
      aboutP2:
        "بالنسبة لي، التصميم الجيد يخلي المنتج أسهل فهمًا للمستخدم، وأفضل للعميل في العرض، الإطلاق، والتطوير.",
      aboutTag01: "نظرة ابداعية",
      aboutTag02: "واجهات تخدمك وتعجب مستخدميك",
      aboutTag03: "وعي برمجي بالتنفيذ",

      backToProjects: "العودة للمشاريع",
      roleLabel: "الدور",
      toolsLabel: "الأدوات",
      deliverablesLabel: "المخرجات",
      viewPrototype: "عرض النموذج التفاعلي",
      viewPresentationPdf: "عرض ملف PDF",
      caseSnapshot: "ملخص المشروع",
      projectNotFoundTitle: "المشروع غير موجود",
      projectNotFoundText:
        "رابط المشروع ناقص أو لا يطابق أي ID محفوظ في ملف البيانات.",

      email: "الإيميل",
      backTop: "العودة للأعلى",
    },
  },

  skills: [
    { en: "UX Thinking", ar: "تفكير UX" },
    { en: "User Research", ar: "بحث المستخدمين" },
    { en: "User Flows", ar: "مسارات المستخدم" },
    { en: "Information Architecture", ar: "هيكلة المعلومات" },
    { en: "Wireframes", ar: "وايرفريم" },
    { en: "Screen Inventory", ar: "حصر الشاشات" },
    { en: "UI Design", ar: "تصميم واجهات" },
    { en: "Design Systems", ar: "أنظمة التصميم" },
    { en: "Visual Direction", ar: "اتجاه بصري" },
    { en: "Prototypes", ar: "نماذج تفاعلية" },
    { en: "Responsive Design", ar: "تصميم متجاوب" },
    { en: "Problem Solving", ar: "حل المشكلات" },
    { en: "Presentation", ar: "العرض" },
    { en: "HTML", ar: "HTML" },
    { en: "CSS", ar: "CSS" },
    { en: "SwiftUI", ar: "SwiftUI" },
    { en: "Figma", ar: "Figma" },
    { en: "Wix", ar: "Wix" },
    { en: "Shopify", ar: "Shopify" },
  ],

  projects: [
    {
      id: "budgie-budgeting-app",
      type: { en: "Finance App", ar: "تطبيق مالي" },
      title: { en: "Budgie", ar: "بدجي" },
      cardText: {
        en: "A smart budgeting app that supports daily spending decisions with clear real-time guidance.",
        ar: "تطبيق ميزانية ذكي يساعد المستخدم يتابع مصروفاته ويتخذ قرارات مالية أوضح في الوقت الفعلي.",
      },
      detailDesc: {
        en: "A smart budgeting app designed to make expense tracking easier and support healthier spending habits.",
        ar: "تطبيق ميزانية ذكي صمم لتسهيل تتبع المصاريف ودعم عادات إنفاق صحية أكثر.",
      },
      overview: {
        en: "Budgie was created to support adults in Saudi Arabia who want better financial stability but struggle with consistency, impulsive spending, and manual budgeting. The app reduces the effort of tracking expenses by automatically recording and categorizing spending, giving users clear insights, budget alerts, and real-time guidance before they pay.",
        ar: "صمم بدجي لدعم البالغين في السعودية ممن يرغبون في استقرار مالي أفضل، لكنهم يواجهون صعوبة في الاستمرارية، قرارات الإنفاق السريعة، والميزانية اليدوية. يقلل التطبيق جهد تتبع المصاريف من خلال تسجيلها وتصنيفها تلقائيا، مع تقديم رؤى واضحة، تنبيهات للميزانية، وتوجيه فوري قبل الدفع.",
      },
      role: { en: "UX/UI Design", ar: "تصميم تجربة وواجهات" },
      tools: ["Figma", "SwiftUI"],
      deliverables: {
        en: "Research, Budget Flow, UI Screens, Prototype",
        ar: "بحث، مسار الميزانية، شاشات واجهة، نموذج تفاعلي",
      },
      tags: [],
      cover: "assets/budgie1.png",
      images: [
        {
          src: "assets/budgie1.png",
          alt: {
            en: "Budgie budgeting app screen",
            ar: "شاشة تطبيق بدجي للميزانية",
          },
        },
        {
          src: "assets/budgie2.png",
          alt: {
            en: "Second Budgie budgeting app screen",
            ar: "الشاشة الثانية لتطبيق بدجي للميزانية",
          },
        },
      ],
      prototypeUrl:
        "https://www.figma.com/proto/aNv23zcU2d1qw518JxVEBc/Budgie?node-id=2191-1153&t=nR9ZVb5hyWPd6Oow-1",
      presentationUrl: "assets/budgiePresentation.pdf",
    },
    {
      id: "gareeb-delivery-app",
      type: { en: "Community Delivery App", ar: "تطبيق توصيل مجتمعي" },
      title: { en: "Gareeb", ar: "قريب" },
      cardText: {
        en: "A neighborhood-based delivery concept built around shared trips and community support.",
        ar: "فكرة توصيل مجتمعية تعتمد على الرحلات القريبة ومساعدة سكان الحي لبعضهم.",
      },
      detailDesc: {
        en: "A local delivery platform that connects people who need small items with nearby users already going to the same place.",
        ar: "منصة توصيل محلية تربط من يحتاج أغراضا بسيطة بأشخاص قريبين ذاهبين لنفس المكان.",
      },
      overview: {
        en: "Gareeb was created to solve a common daily problem: needing one or two small items without wanting to make a full trip or pay high delivery fees. The app turns everyday neighborhood movement into shared opportunities, allowing users to request quick pickups from nearby stores such as pharmacies, bakeries, groceries, and local shops.",
        ar: "صمم قريب لحل مشكلة يومية شائعة: الحاجة لغرض أو غرضين بسيطين بدون مشوار كامل أو رسوم توصيل عالية. يحول التطبيق حركة سكان الحي اليومية إلى فرص مشتركة، بحيث يمكن للمستخدم طلب أغراض بسيطة من أماكن قريبة مثل الصيدلية، المخبز، البقالة، أو المتاجر المحلية.",
      },
      role: { en: "UX/UI Design", ar: "تصميم تجربة وواجهات" },
      tools: ["Figma"],
      deliverables: {
        en: "User Flow, Service Concept, UI Screens, Prototype",
        ar: "مسار المستخدم، فكرة الخدمة، شاشات واجهة، نموذج تفاعلي",
      },
      tags: [],
      cover: "assets/gareeb1.png",
      images: [
        {
          src: "assets/gareeb1.png",
          alt: {
            en: "Gareeb delivery app screen",
            ar: "شاشة تطبيق قريب للتوصيل",
          },
        },
        {
          src: "assets/gareeb2.png",
          alt: {
            en: "Second Gareeb delivery app screen",
            ar: "الشاشة الثانية لتطبيق قريب للتوصيل",
          },
        },
      ],
      prototypeUrl:
        "https://www.figma.com/proto/SoI5tpjoBVz2KAD23yJZAq/Gareeb?node-id=79-23264&t=uojK6x9fyYY7As4N-1",
      presentationUrl: "assets/gareebPresentation.pdf",
    },
    {
      id: "qamareya-womens-health-app",
      type: { en: "Women’s Health App", ar: "تطبيق صحة نسائية" },
      title: { en: "Qamareya", ar: "قمرية" },
      cardText: {
        en: "A calm women’s health app that combines cycle, fertility, and pregnancy tracking in one place.",
        ar: "تطبيق صحة نسائية هادئ يجمع تتبع الدورة، الخصوبة، والحمل في مكان واحد.",
      },
      detailDesc: {
        en: "A smart women’s health app designed to support different health stages through tracking, education, and specialist consultations.",
        ar: "تطبيق صحة نسائية ذكي يدعم مراحل صحية مختلفة من خلال التتبع، التثقيف، والاستشارات المتخصصة.",
      },
      overview: {
        en: "Qamareya brings pregnancy tracking, fertility tracking, and menstrual cycle tracking into one unified platform. The name is inspired by the Arabic word Qamar, meaning moon, reflecting rhythm, phases, softness, and natural cycles. The app creates a calm and organized experience that helps women understand their bodies, follow health changes, access reliable content, and communicate with specialists when needed.",
        ar: "يجمع قمرية تتبع الحمل، الخصوبة، والدورة الشهرية داخل منصة واحدة متكاملة. الاسم مستوحى من كلمة قمر، بما تحمله من معنى الإيقاع، المراحل، النعومة، والدورات الطبيعية. يقدم التطبيق تجربة هادئة ومنظمة تساعد المرأة على فهم جسمها، متابعة التغيرات الصحية، الوصول إلى محتوى موثوق، والتواصل مع المختصين عند الحاجة.",
      },
      role: { en: "UX/UI Design", ar: "تصميم تجربة وواجهات" },
      tools: ["Figma"],
      deliverables: {
        en: "IA, User Flow, Design System, UI Screens",
        ar: "هيكلة معلومات، مسار مستخدم، نظام تصميم، شاشات واجهة",
      },
      tags: [],
      cover: "assets/qamareya1.png",
      images: [
        {
          src: "assets/qamareya1.png",
          alt: {
            en: "Qamareya women’s health app screen",
            ar: "شاشة تطبيق قمرية للصحة النسائية",
          },
        },
        {
          src: "assets/qamareya2.png",
          alt: {
            en: "Second Qamareya women’s health app screen",
            ar: "الشاشة الثانية لتطبيق قمرية للصحة النسائية",
          },
        },
      ],
      prototypeUrl:
        "https://www.figma.com/proto/NP6rBjgIC6Yl13LUZHLMnp/qamaryah?node-id=11-10590&t=DwEIy1Z7t2w6aRK1-1",
      presentationUrl: "assets/qamareyaPresentation.pdf",
    },
    {
      id: "day-diamond-app",
      type: { en: "Gamified Lifestyle App", ar: "تطبيق أسلوب حياة تفاعلي" },
      title: { en: "Day Diamond", ar: "الماس اليوم" },
      cardText: {
        en: "A playful app that helps users spend their free time more intentionally and reduce screen time through real-world challenges.",
        ar: "تطبيق تفاعلي يساعد المستخدمين على استثمار وقت فراغهم وتقليل وقت الشاشة من خلال تحديات واقعية ممتعة.",
      },
      detailDesc: {
        en: "A gamified lifestyle app designed to turn ordinary free moments into valuable experiences through challenges, points, and leaderboard motivation.",
        ar: "تطبيق أسلوب حياة قائم على التلعيب يحوّل لحظات الفراغ اليومية إلى تجارب قيّمة من خلال التحديات، النقاط، ولوحة الصدارة.",
      },
      overview: {
        en: "Day Diamond is a concept born from a simple observation: free time often disappears without us noticing. Many people do not intentionally choose to spend hours on their phones; it slowly happens because scrolling is the easiest option available. The app approaches this problem with a lighter mindset by making better use of time feel playful, approachable, and rewarding. Through short real-world challenges, points, and leaderboard motivation, Day Diamond encourages users to see small free moments as something valuable. The name reflects this idea: a day diamond is a valuable moment hidden inside an ordinary day.",
        ar: "بدأت فكرة الماس اليوم من ملاحظة بسيطة: وقت الفراغ غالبًا يختفي بدون ما ننتبه. كثير من الناس ما يختارون قضاء ساعات طويلة على الجوال عمدًا، لكنه يحدث تدريجيًا لأن التمرير هو الخيار الأسهل. يتعامل التطبيق مع هذه المشكلة بطريقة أخف وأقرب للمستخدم، حيث يجعل استثمار الوقت ممتعًا، بسيطًا، ومحفزًا. من خلال تحديات واقعية قصيرة، نقاط، ولوحة صدارة، يشجع الماس اليوم المستخدمين على رؤية اللحظات الصغيرة في يومهم كشيء قيّم. ويرتبط الاسم بهذه الفكرة: ألماسة اليوم هي لحظة ثمينة مخفية داخل يوم عادي.",
      },
      role: { en: "UX/UI Design", ar: "تصميم تجربة وواجهات" },
      tools: ["Figma"],
      deliverables: {
        en: "Research, User Flow, Design System, UI Screens, Prototype",
        ar: "بحث، مسار مستخدم، نظام تصميم، شاشات واجهة، نموذج تفاعلي",
      },
      tags: [],
      cover: "assets/DayDiamond.png",
      images: [
        {
          src: "assets/DayDiamond.png",
          alt: {
            en: "Day Diamond app screen",
            ar: "شاشة تطبيق الماس اليوم",
          },
        },
        {
          src: "assets/DayDiamond2.png",
          alt: {
            en: "Second Day Diamond app screen",
            ar: "الشاشة الثانية لتطبيق الماس اليوم",
          },
        },
      ],
      prototypeUrl:
        "https://www.figma.com/proto/xZRsHOdtHK8E8LQqRAsPj5/DayDiamond?node-id=82-1100&viewport=39%2C758%2C0.18&t=KjpZbkZ2kS2Lxmf8-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=82%3A1085&page-id=0%3A1",
      presentationUrl: "assets/DayDiamondPresentation.pdf",
    },
  ],
};
