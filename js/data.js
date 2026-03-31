const DATA = {
  resumePdf: "Salsabila_Zaman_CV.pdf",

  /* ---- Nav Links ------------------------------------------------------- */
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],

  /* ---- Hero ------------------------------------------------------------ */
  hero: {
    greeting: "Hi, I'm",
    firstName: "Salsabila",
    lastName: "Zaman",
    title: "Software Engineering Undergraduate & Backend Developer",
    desc: "I'm a Software Engineering student at the University of Dhaka, focused on backend development and system design. I care about writing code that's readable and building systems that don't fall over.",
    profilePhoto: "images/profile-photo.jpg", // set to null to show initials instead
  },

  /* ---- Tech Scroll (edit one set — the duplicate is added automatically) */
  techStack: [
    "Python",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "C++",
    "REST APIs",
    "Microservices",
    "Cybersecurity",
    "Machine Learning",
    "Linux",
  ],

  /* ---- About ----------------------------------------------------------- */
  about: {
    services: [
      { icon: "⚙️", name: "Backend Development" },
      { icon: "🔐", name: "Cybersecurity & CTF" },
      { icon: "🧠", name: "Machine Learning" },
    ],
    paragraphs: [
      "My main interest is backend work — APIs, databases, system design, and the occasional security rabbit hole. I like understanding how things fit together under the hood.",
      "I compete in CTF competitions (reverse engineering, forensics, cryptography) and do competitive programming on Codeforces. Both have made me a noticeably better debugger.",
      "I'm currently looking for backend or security-adjacent opportunities. I work well in environments where there's real code to read and real problems to solve.",
    ],
    stats: [
      { num: "100+", label: "CTF Challenges<br>Solved" },
      { num: "200+", label: "Competitive<br>Problems" },
      { num: "3.88", label: "CGPA<br>/ 4.00" },
    ],
  },

  /* ---- Skills ---------------------------------------------------------- */
  skills: [
    {
      category: "Languages",
      tags: ["C", "C++", "Python", "Java", "JavaScript", "SQL"],
    },
    {
      category: "Backend",
      tags: ["Node.js", "Express.js", "Django", "Flask", "REST APIs", "Auth"],
    },
    {
      category: "Databases",
      tags: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
    },
    {
      category: "Tools",
      tags: [
        "Git",
        "Docker",
        "RabbitMQ",
        "Linux",
        "Apktool",
        "DroidBot",
        "Postman",
      ],
    },
    { category: "Frontend", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
    {
      category: "Concepts",
      tags: [
        "DSA",
        "System Design",
        "Microservices",
        "ML Basics",
        "Cybersecurity",
        "Reverse Engineering",
      ],
    },
  ],

  /* ---- Featured Projects ----------------------------------------------- */
  /* Set demo: null if there is no live demo link */
  featuredProjects: [
    {
      name: "PocketNotion",
      tags: ["Node.js", "Express.js", "PostgreSQL", "REST API", "HTML", "CSS"],
      desc: "A Notion-inspired note-taking app I built to get hands-on with REST API design and PostgreSQL. The interesting part was designing the auth flow and keeping the data model flexible enough to support nested pages without it becoming a mess.",
      github: "https://github.com/SalsabilaZaman",
      demo: null,
      image: "images/pocketNotion.png", // set to null to show the grid placeholder
      visual: "PocketNotion\nNote-taking App",
    },
    {
      name: "Ticket Watcher",
      tags: ["Python", "Web Scraping", "Scheduling", "APIs"],
      desc: "Built this to solve a real problem — manually checking for ticket availability is tedious. It polls target pages on a schedule, detects changes, and sends notifications. Taught me a lot about rate limiting, reliable scheduling, and handling flaky network responses.",
      github: "https://github.com/SalsabilaZaman",
      demo: null,
      image: "images/ticketWatcher.png", // set to null to show the grid placeholder
      visual: "Ticket Watcher\nAutomation System",
    },
    {
      name: "Smart Library System",
      tags: ["Microservices", "Node.js", "Docker", "PostgreSQL", "REST APIs"],
      desc: "A library management system split across independent services — books, users, borrowing, and auth — each with its own database. The goal was to understand microservices trade-offs firsthand. Wiring the inter-service communication and keeping data consistent across services was the main challenge.",
      github: "https://github.com/SalsabilaZaman",
      demo: null,
      image: null, // no screenshot yet — shows grid placeholder
      visual: "Smart Library\nMicroservices",
    },
    {
      name: "DroidScanner",
      tags: ["Python", "PyQt5", "Machine Learning", "SQLite"],
      desc: "A desktop tool that takes an Android APK, pulls features from the manifest file, and runs them through a trained classifier to flag malicious apps. Combines two things I find interesting — static analysis and ML. Getting the feature extraction right took most of the time.",
      github: "https://github.com/SalsabilaZaman",
      demo: null,
      image: "images/droidScanner.png",
      imageStyle: "contain", // 'cover' for screenshots, 'contain' for icons/logos
      visual: "DroidScanner\nAPK Analyzer",
    },
    {
      name: "Obhoy – AI Chatbot",
      tags: ["Python", "NLP", "Backend APIs"],
      desc: "A mental health support chatbot built around NLP. The focus was on the conversation logic and backend — making responses feel contextually appropriate rather than random. It's a hard problem to do well, and this was an honest attempt at a practical version.",
      github: "https://github.com/SalsabilaZaman",
      demo: null,
      image: null, // no screenshot yet — shows grid placeholder
      visual: "Obhoy\nMental Health AI",
    },
  ],

  /* ---- Other Projects -------------------------------------------------- */
  otherProjects: [
    {
      name: "Wumpus World AI Agent",
      desc: "A knowledge-based agent navigating the Wumpus World environment in Python and Pygame. Built for an AI course — more interesting to implement than it sounds.",
      tags: ["Python", "Pygame", "AI"],
      github: null,
    },
    {
      name: "Khai-Dai",
      desc: "A food delivery web app with user auth, order management, and database integration. Full workflow from browsing to checkout.",
      tags: ["Web App", "Auth", "Database"],
      github: null,
    },
    {
      name: "Connect4 AI Game",
      desc: "Browser-based Connect4 with an AI opponent using Minimax and Alpha-Beta pruning. The pruning made a noticeable difference in response speed.",
      tags: ["JavaScript", "Minimax", "AI"],
      github: null,
    },
    {
      name: "Numeric Operations Library",
      desc: "A C++ library covering prime operations, expression parsing, matrix computations, and equation solvers. Written from scratch, no external dependencies.",
      tags: ["C++", "Algorithms", "Math"],
      github: null,
    },
  ],

  /* ---- Achievements ---------------------------------------------------- */
  achievements: [
    "100+ CTF challenges solved across <strong>reverse engineering, forensics, cryptography, steganography, and OSINT</strong>",
    "<strong>Finalist</strong> – UAP Cyber Siege 2025 (National Cybersecurity Competition)",
    "<strong>2nd Runner-up</strong> – National Number Carnival, BUET 2025",
    "200+ problems solved on <strong>Codeforces</strong>",
  ],

  /* ---- Education ------------------------------------------------------- */
  education: [
    {
      degree: "B.Sc. Software Engineering",
      uni: "University of Dhaka",
      years: "2022 – Present",
      cgpa: "3.88",
      cgpaMax: "4.00",
    },
  ],

  /* ---- Contact --------------------------------------------------------- */
  contact: {
    email: "bsse1443@iit.du.ac.bd",
    github: "https://github.com/SalsabilaZaman",
    linkedin: "https://linkedin.com/in/salsabila-zaman24",
    location: "Dhaka, Bangladesh",
    formspreeEndpoint: "https://formspree.io/f/mbdpylgv",
  },
};
