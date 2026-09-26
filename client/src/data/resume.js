export const profile = {
  name: 'Aravinth Kumar V',
  role: 'Junior Software Developer',
  tagline: 'Junior Software Developer crafting responsive React interfaces and MERN-stack apps — creator of the Xira CSS Framework.',
  phone: '+91 6374757014',
  email: 'aravindhezekiel17@gmail.com',
  location: 'Chennai, Tamil Nadu, India',
  summary:
    "Junior Software Developer with 2+ years of professional experience building responsive, accessible, and modern web interfaces using HTML5, CSS3, JavaScript, Bootstrap 5, Tailwind CSS 4, Figma and React.js. Experienced across education, accessibility, corporate, entertainment, and sports domains. Creator of Xira CSS Framework, an intent-based CSS framework featuring intrinsic responsive layouts, reusable UI components, design tokens, selective CSS compilation, and native-first accessibility.",
  resumeFile: '/resume.pdf',
};

export const stats = [
  { label: 'Years of experience', value: '2+' },
  { label: 'Client projects shipped', value: '8+' },
  { label: 'Automated Xira tests', value: '900+' },
  { label: 'CSS payload reduction', value: '77.2%' },
];

export const experience = [
  {
    id: 'mvg-digital',
    company: 'MVG Digital Private Limited',
    role: 'Junior Software Developer',
    location: 'Chennai, Tamil Nadu',
    start: 'Jan 2025',
    end: 'Sep 2026',
    current: true,
    points: [
      'Develop responsive and modern web interfaces using HTML5, CSS3, JavaScript, Bootstrap 5, Tailwind CSS, and React.js.',
      'Build reusable UI components and responsive layouts while maintaining consistency across desktop, tablet, and mobile devices.',
      'Collaborate with design and development teams to translate project requirements into functional, user-friendly web interfaces.',
      'Implement interactive web components, forms, navigation, animations, and responsive layouts based on project requirements.',
      'Work on multiple client projects across education, accessibility, corporate, entertainment, and sports domains.',
      'Contribute to accessibility-focused web development by implementing semantic HTML and user-friendly interfaces for diverse users.',
    ],
  },
  {
    id: 'skifter-technology',
    company: 'Skifter Technology',
    role: 'MERN Stack Developer Intern',
    location: 'Chennai, Tamil Nadu',
    start: 'Dec 2023',
    end: 'Nov 2024',
    current: false,
    points: [
      'Develop full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
      'Build responsive and reusable React.js components and integrate RESTful APIs for dynamic web applications.',
      'Develop backend APIs using Node.js and Express.js with MongoDB for data storage and management.',
      'Implement CRUD operations, form validation, authentication, and frontend-backend integration.',
      'Collaborate with the development team to debug issues, improve application functionality, and deliver project requirements.',
    ],
  },
  
];

export const xira = {
  name: 'Xira CSS Framework',
  role: 'Creator & Developer',
  description:
    'An intent-based CSS framework focused on intrinsic responsive layouts, reusable UI components, design tokens, and native-first accessibility — without utility-class proliferation.',
  stack: ['CSS', 'JavaScript', 'Node.js', 'PostCSS', 'NPM'],
  points: [
    'Designed and developed Xira, an intent-based CSS framework focused on intrinsic responsive layouts, reusable UI components, design tokens, and native-first accessibility without utility-class proliferation.',
    'Built a dependency-aware selective CSS compiler that scans application source, resolves framework APIs and dependencies, and generates production CSS containing only the required Xira styles.',
    'Developed reusable layout primitives and UI components including Grid, Stack, Cluster, Bento, Sidebar, Navbar, Dialog, Accordion, Forms, Cards, Tabs, and more, with built-in theming and responsive behavior.',
    'Built an NPM-based CLI workflow with init, build, dev, and analyze commands for integrating and optimizing Xira in real-world projects.',
    'Validated the framework across Chromium, Firefox, and WebKit with 900+ automated tests covering accessibility, responsive behavior, component interactions, and compiler correctness.',
    'Built a complete SaaS reference website using Xira, achieving a measured 77.2% reduction in raw framework CSS through selective compilation.',
  ],
  primitives: ['Grid', 'Stack', 'Cluster', 'Bento', 'Sidebar', 'Navbar', 'Dialog', 'Accordion', 'Forms', 'Cards', 'Tabs'],
  cli: ['init', 'build', 'dev', 'analyze'],
};

export const projects = [
  {
    id: 'nab',
    name: 'National Association for the Blind (NAB)',
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    domain: 'Accessibility',
    url: 'https://nabtamilnadu.org',
    description:
      'Front-end of an accessibility-focused website for the National Association for the Blind, built with visual-impairment-aware interaction patterns.',
    points: [
      'Implemented responsive and user-friendly interfaces with accessibility considerations for users with visual impairments.',
      'Built semantic HTML structures, responsive layouts, navigation, forms, and interactive UI components.',
    ],
  },
  {
    id: 'ahct',
    name: 'Avatar Human Capital Trust (AHCT)',
    tags: ['WordPress', 'HTML5', 'CSS3', 'JavaScript'],
    domain: 'Corporate',
    url: 'https://ahct.org.in',
    description: 'Organizational website developed and maintained on WordPress with custom responsive layouts.',
    points: [
      'Customized responsive page layouts, content sections, and user interface components based on project requirements.',
      'Implemented front-end enhancements and supported ongoing website content and page updates.',
    ],
  },
  {
    id: 'mss-alumni',
    name: 'The Madras Seva Sadan School — Alumni Portal',
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    domain: 'Education',
    url: 'https://alumni.themadrassevasadan.org',
    description: 'Alumni portal front-end with reusable components and consistent cross-device interfaces.',
    points: [
      'Created responsive layouts, reusable UI components, forms, navigation, and interactive elements using Bootstrap 5.',
      'Ensured consistent and responsive user interfaces across desktop, tablet, and mobile devices.',
    ],
  },
  {
    id: 'sir-m-lady',
    name: 'Sir M Lady School — Website',
    tags: ['HTML5', 'CSS3', 'Tailwind CSS 4', 'JavaScript'],
    domain: 'Education',
    url: 'https://sirmladyschool.edu.in',
    description: 'Modern, responsive school website built with Tailwind CSS 4 and utility-based components.',
    points: [
      'Built reusable utility-based UI components and responsive layouts following modern web design practices.',
      'Implemented responsive navigation, content sections, interactive elements, and cross-device layouts.',
    ],
  },
  {
    id: 'imayah-live',
    name: 'Imayah Live — Class Management Web Application',
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    domain: 'Education',
    url: 'https://live.imayahtech.com',
    description: 'Front-end for a web-based class management application supporting education workflows.',
    points: [
      'Developed responsive interfaces, forms, navigation, reusable UI components, and interactive application modules.',
      'Worked on front-end implementation to support education-related workflows and provide a consistent user experience.',
    ],
  },
  {
    id: 'puthri',
    name: 'Project Puthri',
    tags: ['WordPress', 'HTML5', 'CSS3', 'JavaScript'],
    domain: 'Corporate',
    url: 'https://www.puthri.org',
    description: 'Organizational website developed and maintained on WordPress with custom responsive layouts.',
    points: [
      'Customized responsive page layouts, content sections, and user interface components based on project requirements.',
      'Implemented front-end enhancements and supported ongoing website content and page updates.',
    ],
  },
  {
    id: 'smvrch',
    name: 'Sir Mutha Venkatasubba Rao Concert Hall (SMVRCH)',
    tags: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    domain: 'Entertainment',
    url: 'https://smvrch.com',
    description: 'Visually engaging website for a concert hall, built with Tailwind CSS.',
    points: [
      'Created modern and responsive layouts using Tailwind CSS with reusable UI components.',
      'Implemented responsive navigation, content sections, interactive elements, and visually engaging web interfaces.',
    ],
  },
  {
    id: 'Redbox Mobile',
    name: 'RedBox – Mobile E-Commerce Platform',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    domain: 'Entertainment',
    url: 'https://redbox-ruddy.vercel.app/',
    description: 'Developed a full-stack e-commerce platform for selling new and second-hand mobile phones, mobile accessories, and repair services.',
    points: [
      'Built responsive and reusable user interfaces using React.js, JavaScript, HTML5, CSS3, and modern UI practices',
      'Developed Node.js and Express.js with MongoDB for product, customer, order, and service management',
      'Implemented product browsing, product details, shopping cart, checkout, order tracking, and mobile service features',
      ' Developed an admin panel for managing products, categories, product images, orders, and inventory.',
    ],
  },
  {
    id: 'imayah-intellix',
    name: 'Imayah IntelliX — Company Website',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'CodeIgniter 4'],
    domain: 'Corporate',
    url: 'https://imayahintellix.ae',
    description: 'Responsive company website for a Dubai-based technology company, with a CodeIgniter 4 backend for form handling.',
    points: [
      'Implemented responsive front-end layouts, navigation, content sections, forms, and interactive UI components.',
      'Developed backend functionality for form submission and data processing using CodeIgniter 4.',
    ],
  },
  {
    id: 'kavin-quintal',
    name: 'Kavin Quintal — International Motorcycle Racer Website',
    tags: ['React.js', 'Tailwind CSS 4', 'JavaScript'],
    domain: 'Sports',
    url: 'https://kavinquintal.com',
    description: 'Personal website for an international motorcycle racer, presenting career journey and achievements.',
    points: [
      'Built reusable and responsive UI components using React.js and Tailwind CSS 4.',
      'Created structured sections to present the racer’s profile, career journey, achievements, and racing information.',
      'Implemented modern layouts and interactive sections with a focus on responsive design and maintainable front-end architecture.',
    ],
  },
];

export const skills = {
  Languages: ['HTML5', 'CSS3', 'JavaScript'],
  Frontend: ['React.js', 'Bootstrap 5', 'Tailwind CSS 4', 'Xira CSS', 'GSAP', 'AOS', 'Swiper.js'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Database: ['MongoDB', 'phpMyAdmin'],
  'Version Control': ['Git', 'GitHub'],
  'Design & Tools': ['Figma', 'WordPress'],
  'Web Development': ['Responsive Web Design', 'Front-End Development', 'UI Development', 'Accessibility'],
};

export const education = [
  {
    school: 'Anna University',
    degree: 'Bachelor of Engineering in Computer Science',
    detail: 'CGPA: 7.84',
    location: 'Chennai, Tamil Nadu',
    year: '2022',
  },
];

export const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Professional Working Proficiency' },
];
