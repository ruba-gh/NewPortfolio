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
      navWork: "Work",
      navSkills: "What I bring",
      navClients: "Contact",
      navAbout: "About",

      heroEyebrow: "UX/UI Designer · Computer Science",
      heroTitle:
        "Minimal interfaces. Clear product thinking. Motion with purpose.",
      heroText:
        "A project-based portfolio focused on structure, decisions, and refined user interfaces — with subtle motion and interactive details that never add noise.",
      viewWork: "View work",
      contactMe: "Contact me",
      introStrip:
        "I care about clarity first — then polish, motion, and interaction. The result is work that feels refined, sharp, and usable.",

      projectsEyebrow: "Selected Work",
      projectsTitle: "Selected projects",
      projectsText:
        "A curated set of projects showing how I move from structure and flow to polished, implementation-aware UI.",

      skillsEyebrow: "What I bring",
      skillsTitle: "Interactive skills, cleanly contained.",
      skillsText:
        "A focused interactive area where you can drag the skills around. It brings back personality without adding visual noise to the full page.",

      contactEyebrow: "Start a Project",
      contactTitle: "Let’s build something amazing together.",
      contactText:
        "Have a website, app, dashboard, or UX/UI project in mind? Send the details and I’ll get back to you.",
      clientBubble01: "“Clean and easy to follow.”",
      clientBubble02: "“The structure finally made sense.”",
      clientBubble03: "“Professional, clear, and thoughtful.”",
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
        "A designer who values clarity, restraint, and thoughtful interaction.",
      aboutP1:
        "I’m Ruba Alghamdi, a UX/UI designer with a Computer Science background. I design products with attention to structure, usability, visual hierarchy, and implementation awareness.",
      aboutP2:
        "What matters most to me is not just how the screen looks, but how clearly the product communicates, flows, and works in real use.",
      aboutTag01: "UX Research",
      aboutTag02: "UI Design",
      aboutTag03: "Front-End",

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
      navWork: "المشاريع",
      navSkills: "مهاراتي",
      navClients: "تواصل",
      navAbout: "عنّي",

      heroEyebrow: "مصممة UX/UI بخلفية في علوم الحاسب",
      heroTitle: "واجهات نظيفة. تفكير واضح. حركة لها معنى.",
      heroText:
        "بورتفوليو يعرض المشاريع من حيث الهيكلة، القرارات التصميمية، والواجهات المصقولة، مع حركة خفيفة وتفاصيل تفاعلية تضيف بدون ما تزعج.",
      viewWork: "استعراض الأعمال",
      contactMe: "تواصل معي",
      introStrip:
        "أهتم أولًا بالوضوح، وبعدها الصقل، الحركة، والتفاعل. النتيجة تكون تجربة مرتبة، حادة، وسهلة الاستخدام.",

      projectsEyebrow: "أعمال مختارة",
      projectsTitle: "مشاريع مختارة",
      projectsText:
        "مجموعة مختارة من المشاريع توضح كيف أبدأ من الهيكلة ومسارات المستخدم، ثم أحولها إلى واجهات مصقولة وقابلة للتنفيذ.",

      skillsEyebrow: "مهاراتي",
      skillsTitle: "مهارات تفاعلية داخل مساحة نظيفة.",
      skillsText:
        "مساحة تفاعلية مركزة تقدرين تسحبين فيها المهارات وتحركينها. تضيف شخصية للموقع بدون ما تسبب زحمة بصرية في الصفحة.",

      contactEyebrow: "ابدأ مشروعك",
      contactTitle: "خلّينا نبني شي واضح ومبهر مع بعض.",
      contactText:
        "عندك موقع، تطبيق، داشبورد، أو مشروع UX/UI؟ أرسل التفاصيل وبرجع لك.",
      clientBubble01: "“نظيف وسهل المتابعة.”",
      clientBubble02: "“الهيكلة صارت منطقية وواضحة.”",
      clientBubble03: "“شغل احترافي، واضح، ومدروس.”",
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
      aboutTitle: "مصممة تهتم بالوضوح، الاتزان، والتفاعل المدروس.",
      aboutP1:
        "أنا ربى الغامدي، مصممة UX/UI بخلفية في علوم الحاسب. أصمم المنتجات الرقمية باهتمام بالهيكلة، سهولة الاستخدام، الهرمية البصرية، وقابلية التنفيذ.",
      aboutP2:
        "بالنسبة لي، التصميم مو بس شكل الشاشة. الأهم هو كيف المنتج يوصل فكرته بوضوح، كيف يتحرك المستخدم داخله، وكيف يشتغل في الاستخدام الحقيقي.",
      aboutTag01: "بحث تجربة المستخدم",
      aboutTag02: "تصميم واجهات",
      aboutTag03: "تطوير أمامي",

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
    { en: "User flows", ar: "مسارات المستخدم" },
    { en: "Wireframes", ar: "وايرفريم" },
    { en: "Prototypes", ar: "نماذج تفاعلية" },
    { en: "UI Design", ar: "تصميم واجهات" },
    { en: "UX Research", ar: "بحث تجربة المستخدم" },
    { en: "Information Architecture", ar: "هيكلة المعلومات" },
    { en: "Design Systems", ar: "أنظمة التصميم" },
    { en: "Screen Inventory", ar: "حصر الشاشات" },
    { en: "HTML", ar: "HTML" },
    { en: "CSS", ar: "CSS" },
    { en: "SwiftUI", ar: "SwiftUI" },
    { en: "Figma", ar: "Figma" },
    { en: "Problem Solving", ar: "حل المشكلات" },
    { en: "Visual Direction", ar: "اتجاه بصري" },
    { en: "Responsive Design", ar: "تصميم متجاوب" },
    { en: "Presentations", ar: "عروض تقديمية" },
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
      tags: [
        // { en: "Finance", ar: "مالي" },
        // { en: "Behavioral Support", ar: "دعم سلوكي" },
        // { en: "SwiftUI", ar: "SwiftUI" },
      ],
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
      tags: [
        // { en: "Delivery", ar: "توصيل" },
        // { en: "Community", ar: "مجتمع" },
        // { en: "Figma", ar: "Figma" },
      ],
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
      tags: [
        // { en: "Women’s Health", ar: "صحة نسائية" },
        // { en: "Tracking", ar: "تتبع" },
        // { en: "Figma", ar: "Figma" },
      ],
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
  ],
};
