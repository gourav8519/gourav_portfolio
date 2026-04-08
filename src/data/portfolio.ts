export const personalInfo = {
  name: "Gourav Sahu",
  title: "Full Stack Developer (MERN Stack)",
  tagline: "Building Scalable & High-Performance Web Applications",
  description:
    "2+ years into building SaaS products that actually handle scale - WhatsApp automation doing 3L+ workflows/day, email systems pushing 1M+ emails/day. I work across the full stack with React, Next.js, Node.js, and MongoDB. Not just writing code - designing systems that don't break under pressure.",
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
    "Tailwind CSS",
    "Redux Toolkit",
    "React Flow",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Nest.js",
    "MongoDB",
    "Redis",
    "Socket.io",
  ],
  tools: [
    "Git & GitHub",
    "AWS (EC2, S3)",
    "Docker",
    "Postman",
    "Vercel",
  ],
  highlights: [
    "System Design",
    "Event-Driven Architecture",
    "Queue Workers (BullMQ / Redis)",
    "Real-Time Systems",
    "Performance Optimization",
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
      "Built a WhatsApp automation platform using React Flow with 20+ automation node types, handling 3L+ daily workflow executions",
      "Designed event-driven architecture using Redis queues and worker processes, improving scalability by 40%",
      "Integrated WhatsApp APIs with real-time tracking via Socket.io, reducing manual monitoring by 60%",
      "Developed scalable email automation for 50K+ users with bulk delivery (1M+ emails/day) using Redis, SMTP & PMTA",
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
    title: "Pabbly Email Marketing",
    subtitle: "Bulk Email & Automation System",
    description:
      "Built this from zero - campaign builder, automation workflows, contact segmentation, analytics dashboard. The backend pushes 1M+ emails/day through Redis queues and PMTA/SMTP servers. Serving 50K+ active users.",
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
    title: "Pabbly ChatFlow",
    subtitle: "WhatsApp Automation Platform",
    description:
      "Users drag and drop nodes to create WhatsApp automation flows - conditions, delays, webhooks, API calls. I built both the React Flow frontend and the Redis-powered backend engine. Running 3L+ workflow executions daily with 20+ node types.",
    tech: ["React.js", "React Flow", "Node.js", "Redis", "Socket.io", "MongoDB"],
    highlights: [
      "Visual workflow builder with 20+ automation node types",
      "Event-driven architecture with Redis queues",
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
