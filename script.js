(function () {
  "use strict";

  /* ---------------------------------------------------------
     Translation dictionary
     Keys match data-i18n attributes in index.html
     --------------------------------------------------------- */
  const translations = {
    en: {
      brandName: "Mohamed Rabea",
      navAbout: "About",
      navSkills: "Skills",
      navEducation: "Education",
      navExperience: "Experience",
      navProjects: "Projects",
      navContact: "Contact",
      whatsappLabel: "WhatsApp",

      heroName: "Mohamed Rabea Ali",
      heroTitle: "Cybersecurity Student & Software QA Tester",
      heroBio: "Undergraduate Cybersecurity student with a strong focus on Web Application Penetration Testing and Software Quality Assurance (QA). Passionate about identifying security vulnerabilities, writing automated test scenarios, and building secure, resilient digital solutions.",
      heroLocation: "Cairo, Egypt",
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
      tagPentest: "PenTesting",
      tagQA: "QA Testing",

      aboutHeading: "About",

      skillsHeading: "Skills & Technologies",
      skillCat1: "Cybersecurity & PenTesting",
      skillNetworkFund: "Network Fundamentals",
      skillCat2: "Software Testing & QA",
      skillManualTesting: "Manual Testing",
      skillTestCases: "Test Cases Design",
      skillBugReporting: "Bug Reporting",
      skillCat3: "Programming & Systems",
      skillLinux: "Linux (Ubuntu)",
      skillBash: "Bash Scripting",
      skillCat4: "Tools & Platforms",

      educationHeading: "Education",
      eduInstitution: "Faculty of Computer Science and Artificial Intelligence, Al-Obour University for Science and Technology",
      eduMajor: "Major: Cybersecurity",
      eduStatus: "Expected Graduation: 2029",

      experienceHeading: "Experience & Training",
      exp1Title: "Trainee — Software Testing Track",
      exp1Org: "Digital Egypt Pioneers Initiative (DEPI)",
      exp2Title: "Oracle Certified Specialist — \u201cAI for You\u201d",
      exp2Org: "Oracle University",
      exp3Title: "Certificate of Completion — Computer Network Fundamentals",
      exp3Org: "ITI / Mahara-Tech",

      projectsHeading: "Projects",
      proj1Title: "Product Management System (Java & OOP)",
      proj1Desc: "A robust, object-oriented Product Management System built in Java demonstrating core OOP concepts and structured design.",
      viewRepo: "View Repository",
      proj2Title: "CyberShield Technical & Financial Proposal",
      proj2Desc: "Complete technical and financial proposal document for enterprise cybersecurity implementations.",

      contactHeading: "Get in Touch",
      contactLead: "Open to opportunities in QA testing and application security. Reach out through any channel below.",
      contactWhatsapp: "WhatsApp",
      footerLocation: "Cairo, Egypt"
    },

    ar: {
      brandName: "محمد ربيع",
      navAbout: "نبذة",
      navSkills: "المهارات",
      navEducation: "التعليم",
      navExperience: "الخبرات",
      navProjects: "المشاريع",
      navContact: "تواصل",
      whatsappLabel: "واتساب",

      heroName: "محمد ربيع علي",
      heroTitle: "طالب أمن سيبراني ومختبر جودة برمجيات",
      heroBio: "طالب في مجال الأمن السيبراني مهتم باختبار اختراق تطبيقات الويب وضمان جودة البرمجيات (Software QA). شغوف بكشف الثغرات الأمنية، تصميم حالات الاختبار، وبناء حلول رقمية آمنة وموثوقة.",
      heroLocation: "القاهرة، مصر",
      ctaProjects: "عرض المشاريع",
      ctaContact: "تواصل معي",
      tagPentest: "اختبار الاختراق",
      tagQA: "اختبار الجودة",

      aboutHeading: "نبذة عني",

      skillsHeading: "المهارات والتقنيات",
      skillCat1: "الأمن السيبراني واختبار الاختراق",
      skillNetworkFund: "أساسيات الشبكات",
      skillCat2: "اختبار البرمجيات وضمان الجودة",
      skillManualTesting: "الاختبار اليدوي",
      skillTestCases: "تصميم حالات الاختبار",
      skillBugReporting: "الإبلاغ عن الأخطاء",
      skillCat3: "البرمجة والأنظمة",
      skillLinux: "لينكس (أوبونتو)",
      skillBash: "برمجة Bash",
      skillCat4: "الأدوات والمنصات",

      educationHeading: "التعليم",
      eduInstitution: "كلية علوم الحاسب والذكاء الاصطناعي، جامعة العبور للعلوم والتكنولوجيا",
      eduMajor: "التخصص: الأمن السيبراني",
      eduStatus: "التخرج المتوقع: 2029",

      experienceHeading: "الخبرات والتدريب",
      exp1Title: "متدرب — مسار اختبار البرمجيات",
      exp1Org: "مبادرة رواد مصر الرقمية (DEPI)",
      exp2Title: "أخصائي معتمد من أوراكل — \u201cAI for You\u201d",
      exp2Org: "جامعة أوراكل",
      exp3Title: "شهادة إتمام — أساسيات شبكات الحاسب",
      exp3Org: "معهد تكنولوجيا المعلومات / مهارة تك",

      projectsHeading: "المشاريع",
      proj1Title: "نظام إدارة المنتجات (Java & OOP)",
      proj1Desc: "نظام متكامل لإدارة المنتجات مبني بلغة جافا باستخدام مفاهيم البرمجة الكائنية وتصميم منظم.",
      viewRepo: "عرض المستودع",
      proj2Title: "عرض CyberShield الفني والمالي",
      proj2Desc: "وثيقة عرض فني ومالي متكاملة لتطبيقات الأمن السيبراني على مستوى المؤسسات.",

      contactHeading: "تواصل معي",
      contactLead: "متاح لفرص العمل في اختبار الجودة وأمن التطبيقات. تواصل عبر أي من القنوات التالية.",
      contactWhatsapp: "واتساب",
      footerLocation: "القاهرة، مصر"
    }
  };

  const STORAGE_KEY = "portfolio-lang";
  const root = document.documentElement;
  const langToggle = document.getElementById("langToggle");
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  function applyLanguage(lang, animate) {
    const dict = translations[lang] || translations.en;
    const nodes = document.querySelectorAll("[data-i18n]");

    function paint() {
      nodes.forEach((node) => {
        const key = node.getAttribute("data-i18n");
        if (dict[key] !== undefined) node.textContent = dict[key];
      });
      root.setAttribute("lang", lang);
      root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
      document.title =
        lang === "ar"
          ? "محمد ربيع علي — طالب أمن سيبراني ومختبر جودة"
          : "Mohamed Rabea Ali — Cybersecurity Student & QA Tester";
    }

    if (!animate) {
      paint();
      return;
    }

    nodes.forEach((n) => n.classList.add("i18n-fading"));
    window.setTimeout(() => {
      paint();
      nodes.forEach((n) => n.classList.remove("i18n-fading"));
    }, 160);
  }

  function currentLang() {
    return root.getAttribute("lang") === "ar" ? "ar" : "en";
  }

  function toggleLanguage() {
    const next = currentLang() === "en" ? "ar" : "en";
    localStorage.setItem(STORAGE_KEY, next);
    applyLanguage(next, true);
  }

  langToggle.addEventListener("click", toggleLanguage);

  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Initial language: saved preference, else browser language, else English
  let initialLang = "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") {
      initialLang = saved;
    } else if ((navigator.language || "").toLowerCase().startsWith("ar")) {
      initialLang = "ar";
    }
  } catch (e) {
    /* localStorage unavailable — default to English */
  }
  applyLanguage(initialLang, false);
})();
