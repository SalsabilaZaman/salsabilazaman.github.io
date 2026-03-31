const DATA = {
  resumePdf: 'Salsabila_Zaman_CV.pdf',

  /* ---- Nav Links ------------------------------------------------------- */
  navLinks: [
    { label: 'About',        href: '#about'        },
    { label: 'Skills',       href: '#skills'       },
    { label: 'Projects',     href: '#projects'     },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact',      href: '#contact'      },
  ],

  /* ---- Hero ------------------------------------------------------------ */
  hero: {
    greeting:     "Hi, I'm",
    firstName:    'Salsabila',
    lastName:     'Zaman',
    title:        'Software Engineering Undergraduate & Backend Developer',
    desc:         'I enjoy building secure, scalable systems and backend applications. Particularly interested in system design, cybersecurity, and intelligent software systems.',
    profilePhoto: 'images/profile-photo.jpg',   // set to null to show initials instead
  },

  /* ---- Tech Scroll (edit one set — the duplicate is added automatically) */
  techStack: [
    'Python', 'Node.js', 'PostgreSQL', 'Docker', 'C++',
    'REST APIs', 'Microservices', 'Cybersecurity', 'Machine Learning', 'Linux',
  ],

  /* ---- About ----------------------------------------------------------- */
  about: {
    services: [
      { icon: '⚙️', name: 'Backend Development' },
      { icon: '🔐', name: 'Cybersecurity & CTF'  },
      { icon: '🧠', name: 'Machine Learning'      },
    ],
    paragraphs: [
      'I am an undergraduate Software Engineering student at the University of Dhaka with a strong interest in backend development, system design, cybersecurity, and intelligent software systems.',
      'I enjoy building applications that solve real-world problems and focus on writing clean, maintainable, and scalable code. My experience includes developing full-stack web applications, microservices-based systems, machine learning applications, and automation tools.',
      'I am also actively involved in Capture The Flag (CTF) competitions and competitive programming, which has helped me develop strong problem-solving, analytical thinking, and debugging skills.',
      'Currently, I am looking for opportunities to work on backend systems, distributed applications, and security-focused software projects.',
    ],
    stats: [
      { num: '100+', label: 'CTF Challenges<br>Solved'   },
      { num: '200+', label: 'Competitive<br>Problems'    },
      { num: '3.85', label: 'CGPA<br>/ 4.00'            },
    ],
  },

  /* ---- Skills ---------------------------------------------------------- */
  skills: [
    { category: 'Languages',  tags: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL'] },
    { category: 'Backend',    tags: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs', 'Auth'] },
    { category: 'Databases',  tags: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'] },
    { category: 'Tools',      tags: ['Git', 'Docker', 'RabbitMQ', 'Linux', 'Apktool', 'DroidBot', 'Postman'] },
    { category: 'Frontend',   tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
    { category: 'Concepts',   tags: ['DSA', 'System Design', 'Microservices', 'ML Basics', 'Cybersecurity', 'Reverse Engineering'] },
  ],

  /* ---- Featured Projects ----------------------------------------------- */
  /* Set demo: null if there is no live demo link */
  featuredProjects: [
    {
      name:   'PocketNotion',
      tags:   ['Node.js', 'Express.js', 'PostgreSQL', 'REST API', 'HTML', 'CSS'],
      desc:   'A lightweight note-taking and organization web application inspired by Notion. Users can create, edit, organize, and manage notes with authentication and persistent database storage. Focuses on backend architecture, REST API development, database design, and user authentication.',
      github: 'https://github.com/SalsabilaZaman',
      demo:   null,
      image:  'images/pocketNotion.png',    // set to null to show the grid placeholder
      visual: 'PocketNotion\nNote-taking App',
    },
    {
      name:   'Ticket Watcher',
      tags:   ['Python', 'Web Scraping', 'Scheduling', 'APIs'],
      desc:   'An automated monitoring system that tracks ticket availability and notifies users when tickets become available. The system periodically checks websites, processes data, and sends notifications — demonstrating automation, scheduling, and backend processing.',
      github: 'https://github.com/SalsabilaZaman',
      demo:   null,
      image:  'images/ticketWatcher.png',   // set to null to show the grid placeholder
      visual: 'Ticket Watcher\nAutomation System',
    },
    {
      name:   'Smart Library System',
      tags:   ['Microservices', 'Node.js', 'Docker', 'PostgreSQL', 'REST APIs'],
      desc:   'A microservices-based library management system with separate services for books, users, borrowing, and authentication. Each service owns its database and communicates via REST APIs. Demonstrates database-per-service architecture and scalable backend system design.',
      github: 'https://github.com/SalsabilaZaman',
      demo:   null,
      image:  null,                         // no screenshot yet — shows grid placeholder
      visual: 'Smart Library\nMicroservices',
    },
    {
      name:   'DroidScanner',
      tags:   ['Python', 'PyQt5', 'Machine Learning', 'SQLite'],
      desc:   'A desktop application that analyzes Android APK files and classifies them as malicious or benign using machine learning. Extracts features from Android manifest files, stores them in a database, and uses a trained model for classification — combining cybersecurity, ML, and software engineering.',
      github: 'https://github.com/SalsabilaZaman',
      demo:   null,
      image:       'images/droidScanner.png',
      imageStyle:  'contain',               // 'cover' for screenshots, 'contain' for icons/logos
      visual:      'DroidScanner\nAPK Analyzer',
    },
    {
      name:   'Obhoy – AI Chatbot',
      tags:   ['Python', 'NLP', 'Backend APIs'],
      desc:   'An AI-based mental health support chatbot designed to provide basic emotional support and conversation using natural language processing. Demonstrates AI integration, backend logic design, and user interaction systems.',
      github: 'https://github.com/SalsabilaZaman',
      demo:   null,
      image:  null,                         // no screenshot yet — shows grid placeholder
      visual: 'Obhoy\nMental Health AI',
    },
  ],

  /* ---- Other Projects -------------------------------------------------- */
  otherProjects: [
    {
      name:   'Wumpus World AI Agent',
      desc:   'Logical agent simulation built using Python and Pygame. Implements knowledge-based agent decision making in the classic Wumpus World environment.',
      tags:   ['Python', 'Pygame', 'AI'],
      github: null,
    },
    {
      name:   'Khai-Dai',
      desc:   'Food delivery web application with user authentication, ordering system, and full database integration covering the complete food ordering workflow.',
      tags:   ['Web App', 'Auth', 'Database'],
      github: null,
    },
    {
      name:   'Connect4 AI Game',
      desc:   'Browser-based Connect4 game with an AI opponent implemented using the Minimax algorithm with Alpha-Beta pruning for optimal move selection.',
      tags:   ['JavaScript', 'Minimax', 'AI'],
      github: null,
    },
    {
      name:   'Numeric Operations Library',
      desc:   'C++ mathematical computation library implementing prime operations, expression evaluation, matrix computations, and equation solvers.',
      tags:   ['C++', 'Algorithms', 'Math'],
      github: null,
    },
  ],

  /* ---- Achievements ---------------------------------------------------- */
  achievements: [
    'Solved <strong>100+ Capture The Flag (CTF)</strong> challenges in reverse engineering, forensics, cryptography, steganography, and OSINT',
    '<strong>Finalist</strong> – UAP Cyber Siege 2025 (National Cybersecurity Competition)',
    '<strong>2nd Runner-up</strong> – National Number Carnival, BUET 2025',
    'Active competitive programmer on <strong>Codeforces</strong> with 200+ problems solved',
  ],

  /* ---- Education ------------------------------------------------------- */
  education: [
    {
      degree:  'B.Sc. Software Engineering',
      uni:     'University of Dhaka',
      years:   '2022 – Present',
      cgpa:    '3.88',
      cgpaMax: '4.00',
    },
  ],

  /* ---- Contact --------------------------------------------------------- */
  contact: {
    email:    'bsse1443@iit.du.ac.bd',
    github:   'https://github.com/SalsabilaZaman',
    linkedin: 'https://linkedin.com/in/salsabila-zaman24',
    location: 'Dhaka, Bangladesh',
  },
};
