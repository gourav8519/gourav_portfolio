export const personalInfo = {
  name: "Gourav Sahu",
  title: "Full Stack Developer (MERN Stack)",
  tagline: "Building Scalable & High-Performance Web Applications",
  description:
    "MERN Stack Developer with 2+ years of experience building scalable SaaS applications, automation systems, and real-time platforms. I specialize in React.js, Next.js, Node.js, and MongoDB — from crafting pixel-perfect UIs to designing high-performance backend architectures handling millions of operations daily.",
  email: "s001gourav@gmail.com",
  phone: "+91 8519006622",
  location: "Bhopal, India",
  linkedin: "https://www.linkedin.com/in/gourav-sahu01/",
  github: "https://github.com/gourav8519",
  resumeLink: "/Gourav_Sahu_Resume.pdf",
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Redux Toolkit", level: 88 },
    { name: "React Flow", level: 85 },
    { name: "HTML5 / CSS3", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "Nest.js", level: 78 },
    { name: "MongoDB", level: 88 },
    { name: "Redis", level: 82 },
    { name: "Socket.io", level: 85 },
    { name: "REST APIs", level: 92 },
    { name: "MySQL", level: 78 },
  ],
  tools: [
    "Git & GitHub",
    "AWS (EC2, S3)",
    "Docker",
    "Cloudflare",
    "Postman",
    "VS Code",
    "Jira",
    "Figma",
    "Webpack / Vite",
    "Jest",
    "PM2",
    "Vercel",
  ],
  highlights: [
    "System Design",
    "Data Structures & Algorithms",
    "OOPs Concepts",
    "DBMS & Database Design",
    "Operating Systems",
    "Event-Driven Architecture",
    "Real-Time Systems (Socket.io)",
    "Queue Workers (BullMQ / Redis)",
    "JWT Authentication & RBAC",
    "Performance Optimization",
    "OWASP Security Standards",
    "Agile / Scrum Methodology",
    "CI/CD & DevOps Basics",
    "Database Indexing & Optimization",
    "REST API Design & Versioning",
    "Microservices (Basics)",
  ],
};

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Pabbly",
    location: "Bhopal, India",
    period: "May 2025 – Present",
    current: true,
    highlights: [
      "Built a WhatsApp automation platform using React Flow, handling 5,000+ daily workflow executions with conditions, delays, and webhooks",
      "Designed event-driven architecture using Redis queues and worker processes, improving scalability by 40%",
      "Integrated WhatsApp APIs with real-time tracking via Socket.io, reducing manual monitoring by 60%",
      "Developed scalable email automation for 10,000+ users with bulk delivery (1M+ emails/day) using Redis, SMTP & PMTA",
      "Achieved 25-30% API performance improvement through caching and query optimization",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "iifetech Pvt Ltd",
    location: "Bhopal, India",
    period: "Feb 2024 – May 2025",
    current: false,
    highlights: [
      "Built scalable dashboards and reusable UI components using React.js, Next.js, and Tailwind CSS, improving dev speed by 30%",
      "Developed and optimized REST APIs handling thousands of daily requests, reducing load time by 20-25%",
      "Implemented JWT-based authentication and role-based access control for enhanced security",
    ],
  },
];

export const projects = [
  {
    title: "Pabbly ChatFlow",
    subtitle: "WhatsApp Automation Platform",
    description:
      "Built a real-time WhatsApp automation platform with a visual drag-and-drop workflow builder. The system handles 5,000+ daily workflow executions with support for conditions, delays, webhooks, and API integrations.",
    tech: ["React.js", "React Flow", "Node.js", "Redis", "Socket.io", "MongoDB"],
    highlights: [
      "Visual workflow builder with 15+ custom node types",
      "Event-driven architecture with Redis queues",
      "Real-time execution logs and message tracking",
    ],
    color: "from-green-400 to-emerald-600",
    liveLink: "",
  },
  {
    title: "Pabbly Email Marketing",
    subtitle: "Bulk Email & Automation System",
    description:
      "Zero-to-one development of a complete email automation platform supporting 10,000+ users. Built the entire email campaign builder, automation workflows, and high-volume delivery pipeline processing 1M+ emails daily.",
    tech: ["React.js", "Node.js", "Redis", "SMTP/PMTA", "MongoDB", "Socket.io"],
    highlights: [
      "Email automation builder with drag-and-drop sequencing",
      "Bulk delivery pipeline processing 1M+ emails/day",
      "Analytics dashboard for opens, clicks, bounces",
    ],
    color: "from-blue-400 to-indigo-600",
    liveLink: "",
  },
  {
    title: "SourceAI",
    subtitle: "AI-Powered Support System",
    description:
      "Built an intelligent customer support system powered by OpenAI that automates 70-80% of customer queries. Features real-time chat with AI-to-human handoff and IMAP-based email-to-ticket conversion.",
    tech: ["Next.js", "OpenAI API", "Node.js", "Socket.io", "MongoDB"],
    highlights: [
      "AI chatbot automating 70-80% of customer queries",
      "Real-time chat with AI-to-human handoff",
      "IMAP-based email-to-ticket conversion",
    ],
    color: "from-purple-400 to-violet-600",
    liveLink: "",
  },
  {
    title: "Ecommerce Store",
    subtitle: "Full Stack Shopping Platform",
    description:
      "Built a complete ecommerce platform for buying and selling phones, laptops, and watches online. Features include product listings, cart management, user authentication, and a responsive shopping experience.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Redux Toolkit"],
    highlights: [
      "Full CRUD with product management",
      "JWT authentication & cart system",
      "Responsive UI with Tailwind CSS",
    ],
    color: "from-orange-400 to-red-500",
    liveLink: "",
  },
  {
    title: "Flora",
    subtitle: "Animated Flower Shop Website",
    description:
      "A beautifully animated web application for selling cut flowers and ornamental plants. Built with scroll-triggered animations using GSAP for a premium, interactive browsing experience.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "GSAP", "ScrollTrigger"],
    highlights: [
      "Smooth GSAP scroll-triggered animations",
      "Interactive product showcase",
      "Fully responsive design",
    ],
    color: "from-pink-400 to-rose-600",
    liveLink: "https://floraa.netlify.app/",
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Oriental College of Technology, Bhopal",
  period: "2019 – 2023",
  cgpa: "8.4",
};

export const certifications = [
  { name: "UX Design Foundations", provider: "Coursera", year: "2023" },
  { name: "Building RESTful APIs with Node.js and Express", provider: "Coursera", year: "2021" },
  { name: "Git + GitHub for Open Source Collaboration", provider: "Coursera", year: "2020" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
];
