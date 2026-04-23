export const personalInfo = {
  name: "Gourav Sahu",
  title: "Full Stack Software Engineer",
  tagline: "Building Scalable & High-Performance Web Applications",
  description:
    "3+ years into building SaaS products that actually handle scale - WhatsApp automation doing 1L+ workflows/day, email systems pushing 1M+ emails/day. I work across the full stack with React, Next.js, Node.js, and MongoDB. Not just writing code - designing systems that don't break under pressure.",
  email: "s001gourav@gmail.com",
  phone: "+91 8519006622",
  location: "Bhopal, India",
  linkedin: "https://www.linkedin.com/in/gourav-sahu01/",
  github: "https://github.com/gourav8519",
  resumeLink: "/Gourav_Sahu_Resume.pdf",
};

export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "React Flow",
    "Material UI",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Nest.js",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Socket.io",
    "BullMQ",
  ],
  tools: [
    "Git & GitHub",
    "GitHub Actions",
    "Docker",
    "AWS (EC2, S3, Lambda)",
    "Cloudflare",
    "Linux",
    "Postman",
    "Jest",
    "Vercel",
  ],
  highlights: [
    "System Design",
    "Event-Driven Architecture",
    "Queue Workers (BullMQ / Redis)",
    "Real-Time Systems (Socket.IO)",
    "JWT / OAuth 2.0",
    "Webhooks",
    "CI/CD",
    "Caching & DB Indexing",
    "Performance Optimization",
  ],
};

export const experiences = [
  {
    title: "Associate Software Developer (Full Stack)",
    company: "Pabbly",
    location: "Bhopal, India",
    period: "May 2025 – Present",
    current: true,
    highlights: [
      "Owned end-to-end delivery of a WhatsApp automation platform handling 1L+ daily workflow executions, built with React Flow supporting conditions, delays, and webhook triggers",
      "Architected an event-driven execution engine with Redis queues, BullMQ, and worker processes, achieving 99.9% uptime and horizontal scalability",
      "Integrated WhatsApp Business APIs with real-time tracking via Socket.io, cutting manual monitoring effort by 60% and accelerating debugging for the support team",
      "Scaled a high-throughput email delivery platform serving 50K+ users and 1M+ emails/day using Redis, SMTP, and PMTA, boosting API throughput by 25-30% and trimming memory footprint by 35% through caching, query tuning, and data structure refactors",
      "Collaborated across 2-week agile sprints with product, QA, and design teams, leading 30+ code reviews and mentoring 2 junior developers on best practices",
    ],
  },
  {
    title: "Associate Software Engineer (Full Stack)",
    company: "iifetech Pvt Ltd",
    location: "Bhopal, India",
    period: "Feb 2024 – May 2025",
    current: false,
    highlights: [
      "Shipped scalable dashboards and reusable UI component libraries with React.js, Next.js, and TypeScript, accelerating frontend dev speed by 30% across multiple projects",
      "Optimized REST APIs in Node.js and Express.js handling thousands of daily requests, reducing average response time by 20-25% via SQL tuning, indexing, and Redis caching",
      "Implemented JWT authentication and role-based access control (RBAC) across 25+ API endpoints supporting 5+ user roles, strengthening platform security via stateless design",
      "Diagnosed and resolved 20+ critical production incidents through profiling and debugging, cutting average resolution time by 40% spanning frontend and backend layers",
      "Partnered with cross-functional teams in weekly sprint planning, presenting 10+ technical proposals and contributing to 3 major architectural decisions",
    ],
  },
  {
    title: "Software Developer",
    company: "Extempore Software Solutions Pvt Ltd",
    location: "Indore, India",
    period: "May 2023 – Dec 2023",
    current: false,
    highlights: [
      "Contributed to development of web applications using JavaScript, React.js, and Node.js, building responsive UI components and integrating REST APIs for client-facing dashboards",
      "Resolved bug reports and implemented enhancements across frontend and backend layers, improving application stability and user experience",
      "Participated in code reviews and agile sprints under senior developer mentorship, building foundational expertise in MongoDB, MySQL, and Git-based workflows",
    ],
  },
];

export const projects = [
  {
    title: "Pabbly Email Marketing",
    subtitle: "Bulk Email & Automation System",
    description:
      "Built this from zero - campaign builder, automation workflows, contact segmentation, analytics dashboard. The backend pushes 1M+ emails/day through Redis queues and PMTA/SMTP servers. Serving 50K+ active users.",
    tech: ["React.js", "Node.js", "Redis", "SMTP/PMTA", "MongoDB", "Socket.io"],
    highlights: [
      "Email automation builder with drag-and-drop sequencing",
      "Bulk delivery pipeline processing 1M+ emails/day with throttling, rate limiting & bounce handling",
      "Analytics dashboard for opens, clicks, bounces",
    ],
    color: "from-blue-400 to-indigo-600",
    liveLink: "",
  },
  {
    title: "Pabbly ChatFlow",
    subtitle: "WhatsApp Automation Platform",
    description:
      "Users drag and drop nodes to create WhatsApp automation flows - conditions, delays, webhooks, API calls. I built both the React Flow frontend and the Redis-powered backend engine. Running 1L+ workflow executions daily with 20+ node types.",
    tech: ["React.js", "React Flow", "Node.js", "Redis", "BullMQ", "Socket.io", "MongoDB"],
    highlights: [
      "Visual workflow builder with 20+ automation node types",
      "Event-driven backend with Redis queues, retries, and dead-letter queues (99%+ delivery reliability)",
      "Real-time execution logs and message tracking",
    ],
    color: "from-green-400 to-emerald-600",
    liveLink: "",
  },
  {
    title: "SourceAI",
    subtitle: "AI-Powered Support System",
    description:
      "Customer support system where AI handles 70-80% of queries automatically. When it can't answer, it hands off to a human agent with full context. Also converts support emails into tickets via IMAP integration.",
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
    title: "Flora",
    subtitle: "Animated Flower Shop Website",
    description:
      "Animated flower shop website with scroll-triggered animations using GSAP and ScrollTrigger. Heavy focus on motion design and smooth interactions.",
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
