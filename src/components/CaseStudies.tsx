"use client";

import AnimatedSection from "./AnimatedSection";
import { FiTarget, FiTool, FiLayers, FiZap, FiTrendingUp, FiBookOpen, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  {
    id: "chatflow",
    title: "Pabbly ChatFlow",
    subtitle: "WhatsApp Automation Platform",
    color: "from-green-500 to-emerald-600",
    summary: "Visual workflow builder handling 5,000+ daily executions with event-driven architecture",
    metrics: [
      { label: "Daily Executions", value: "5,000+" },
      { label: "Scalability Boost", value: "40%" },
      { label: "Monitoring Reduced", value: "60%" },
      { label: "Node Types", value: "15+" },
    ],
    sections: {
      problem:
        "Businesses were manually managing WhatsApp conversations — sending replies, follow-ups, and campaigns one by one. No way to automate complex multi-step workflows. Existing tools were either too expensive or lacked visual workflow building.",
      solution:
        "Built a full-stack WhatsApp automation platform with a visual drag-and-drop workflow builder. Users create complex automation flows with conditions, delays, webhooks, and API blocks — all without writing code.",
      architecture: [
        "React Flow-based visual editor for drag-and-drop workflow creation",
        "Node.js backend with Express for API and workflow orchestration",
        "Redis queues (BullMQ) for async job processing with worker processes",
        "MongoDB for workflows, execution logs, and user data",
        "Socket.io for real-time execution tracking and live log streaming",
        "WhatsApp Cloud API integration for message delivery",
      ],
      challenges: [
        { problem: "Race conditions in concurrent workflow executions", solution: "Redis-based distributed locks and idempotency keys" },
        { problem: "WhatsApp API rate limits causing failures", solution: "Smart throttling with exponential backoff and queue-based batching" },
        { problem: "Complex workflow state across async steps", solution: "State machine pattern with execution context stored in Redis" },
      ],
      impact:
        "Enabled businesses to automate WhatsApp communication end-to-end. Reduced manual effort by 60%. Event-driven architecture scaled the platform to handle 40% more load without infrastructure changes.",
      tech: ["React.js", "React Flow", "Node.js", "MongoDB", "Redis", "BullMQ", "Socket.io", "WhatsApp API"],
      learnings: [
        "Designing event-driven systems that handle failures gracefully",
        "Building visual editors intuitive for non-technical users",
        "Scaling queue-based architectures for high-throughput processing",
      ],
    },
  },
  {
    id: "email",
    title: "Pabbly Email Marketing",
    subtitle: "Bulk Email & Automation System",
    color: "from-blue-500 to-indigo-600",
    summary: "Complete email platform for 10,000+ users processing 1M+ emails daily",
    metrics: [
      { label: "Emails/Day", value: "1M+" },
      { label: "Active Users", value: "10,000+" },
      { label: "API Boost", value: "25-30%" },
      { label: "Architecture", value: "Multi-worker" },
    ],
    sections: {
      problem:
        "Sending bulk emails at scale (1M+/day) involves deliverability challenges, IP warming, bounce handling, and spam compliance. Most solutions are too expensive or lack automation workflows for modern marketing.",
      solution:
        "Built a complete email marketing platform from scratch — visual automation builder, campaign engine, contact segmentation, and high-performance delivery pipeline using Redis queues and SMTP/PMTA servers.",
      architecture: [
        "React.js frontend with drag-and-drop automation builder",
        "Node.js backend for campaign scheduling and automation triggers",
        "Redis-based queue pipeline (BullMQ) across worker processes",
        "PMTA/SMTP integration for high-volume delivery with IP rotation",
        "Webhook receivers for bounces, opens, clicks, complaints",
        "Socket.io for live campaign monitoring dashboards",
      ],
      challenges: [
        { problem: "Processing 1M+ emails/day without bottlenecks", solution: "Multi-stage Redis queue pipeline with horizontal worker scaling and batch processing" },
        { problem: "Maintaining deliverability at high volume", solution: "IP warmup schedules, domain rotation, bounce processing, and complaint feedback loops" },
        { problem: "Real-time tracking at scale (millions of events)", solution: "Event ingestion with Redis pub/sub, batch writes to MongoDB, Socket.io for live dashboards" },
      ],
      impact:
        "Gave 10,000+ small businesses access to enterprise-grade email marketing. Automation builder reduced manual campaign work by 70%. Caching improved API response times by 25-30%.",
      tech: ["React.js", "Node.js", "MongoDB", "Redis", "BullMQ", "PMTA/SMTP", "Socket.io", "Webhooks"],
      learnings: [
        "Designing high-throughput queue pipelines that don't lose messages",
        "Email deliverability science — warmup, reputation, authentication",
        "Performance optimization through caching and database indexing",
      ],
    },
  },
  {
    id: "sourceai",
    title: "SourceAI",
    subtitle: "AI-Powered Support System",
    color: "from-purple-500 to-violet-600",
    summary: "AI chatbot automating 70-80% of customer queries with real-time human handoff",
    metrics: [
      { label: "Queries Automated", value: "70-80%" },
      { label: "Response Time", value: "<2 sec" },
      { label: "Handoff", value: "Real-time" },
      { label: "Email→Ticket", value: "IMAP" },
    ],
    sections: {
      problem:
        "Support teams spend 70-80% of time on repetitive questions. During peak hours, response times spike and satisfaction drops. Traditional rule-based chatbots can't handle nuanced customer queries.",
      solution:
        "Built an AI-powered support system using OpenAI that handles 70-80% of queries automatically. When AI can't resolve, it hands off to human agents with full conversation context. Also built IMAP email-to-ticket conversion.",
      architecture: [
        "Next.js frontend with real-time chat interface and admin dashboard",
        "Node.js backend for AI processing and ticket management",
        "OpenAI API with context-aware prompt engineering",
        "Socket.io for real-time messaging between customers, AI, and agents",
        "MongoDB for conversations, tickets, and knowledge base",
        "IMAP integration for email-to-ticket conversion",
      ],
      challenges: [
        { problem: "AI giving inaccurate or hallucinated responses", solution: "RAG-like pattern grounding responses in knowledge base with confidence scoring for human handoff" },
        { problem: "Seamless handoff without losing context", solution: "Full conversation state in MongoDB, passed to human agent in real-time via Socket.io" },
        { problem: "Emails from multiple formats and providers", solution: "Robust IMAP parser handling HTML, plain text, attachments, and threading" },
      ],
      impact:
        "Reduced support workload by 70-80%. Response time dropped from minutes to <2 seconds. Complex issues still got human attention without context loss.",
      tech: ["Next.js", "Node.js", "MongoDB", "OpenAI API", "Socket.io", "IMAP"],
      learnings: [
        "Prompt engineering dramatically affects AI response quality",
        "AI systems need guardrails — confidence scoring and fallbacks are essential",
        "Building for graceful degradation — when AI fails, UX shouldn't break",
      ],
    },
  },
];

function CaseStudyCard({ cs, index }: { cs: typeof caseStudies[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="bg-white dark:bg-dark-800/60 rounded-2xl border border-dark-200/60 dark:border-dark-700/40 overflow-hidden hover:border-primary-500/30 transition-all duration-300">
        {/* Clickable Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left"
        >
          <div className={`bg-gradient-to-r ${cs.color} p-5 md:p-6 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{cs.title}</h3>
                <p className="text-white/80 text-sm font-medium mt-0.5">{cs.subtitle}</p>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 ml-4"
              >
                <FiChevronDown className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Summary + Metrics — always visible */}
          <div className="p-5 md:p-6">
            <p className="text-sm text-dark-500 dark:text-dark-400 mb-4">{cs.summary}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {cs.metrics.map((m, i) => (
                <div key={i} className="text-center p-3 bg-dark-50 dark:bg-dark-700/30 rounded-xl">
                  <div className="text-lg md:text-xl font-extrabold text-primary-600 dark:text-primary-400">{m.value}</div>
                  <div className="text-[10px] md:text-xs text-dark-500 dark:text-dark-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-6 space-y-6 border-t border-dark-200/50 dark:border-dark-700/30 pt-6">
                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FiTarget className="w-4 h-4 text-red-500" />
                      <h4 className="font-bold text-sm text-dark-900 dark:text-white">The Problem</h4>
                    </div>
                    <p className="text-sm text-dark-500 dark:text-dark-400">{cs.sections.problem}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FiTool className="w-4 h-4 text-green-500" />
                      <h4 className="font-bold text-sm text-dark-900 dark:text-white">My Solution</h4>
                    </div>
                    <p className="text-sm text-dark-500 dark:text-dark-400">{cs.sections.solution}</p>
                  </div>
                </div>

                {/* Architecture */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FiLayers className="w-4 h-4 text-purple-500" />
                    <h4 className="font-bold text-sm text-dark-900 dark:text-white">Architecture</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-1.5">
                    {cs.sections.architecture.map((item, i) => (
                      <div key={i} className="flex gap-2 items-start text-sm text-dark-600 dark:text-dark-300">
                        <span className="text-primary-500 mt-1 shrink-0 text-[8px]">&#9679;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FiZap className="w-4 h-4 text-orange-500" />
                    <h4 className="font-bold text-sm text-dark-900 dark:text-white">Challenges & Solutions</h4>
                  </div>
                  <div className="space-y-2">
                    {cs.sections.challenges.map((c, i) => (
                      <div key={i} className="bg-dark-50 dark:bg-dark-700/30 rounded-xl p-3">
                        <p className="text-xs font-semibold text-dark-900 dark:text-white">
                          {c.problem}
                        </p>
                        <p className="text-xs text-dark-500 dark:text-dark-400 mt-1">
                          → {c.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FiTrendingUp className="w-4 h-4 text-green-500" />
                    <h4 className="font-bold text-sm text-dark-900 dark:text-white">Impact</h4>
                  </div>
                  <p className="text-sm text-dark-600 dark:text-dark-300">{cs.sections.impact}</p>
                </div>

                {/* Learnings & Tech */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FiBookOpen className="w-4 h-4 text-blue-500" />
                      <h4 className="font-bold text-sm text-dark-900 dark:text-white">Key Learnings</h4>
                    </div>
                    <ul className="space-y-1.5">
                      {cs.sections.learnings.map((l, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-dark-500 dark:text-dark-400">
                          <span className="text-primary-500 mt-0.5 shrink-0">&#10003;</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-dark-900 dark:text-white mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.sections.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-dark-50 dark:bg-dark-700/50 text-dark-600 dark:text-dark-400 rounded-lg text-xs font-semibold border border-dark-200/50 dark:border-dark-600/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-50/50 via-transparent to-dark-50/30 dark:from-dark-900/30 dark:via-transparent dark:to-dark-900/20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              Deep Dives
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Case{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                Studies
              </span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 max-w-xl mx-auto text-base md:text-lg">
              Click to explore how I build production-grade systems
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {caseStudies.map((cs, idx) => (
            <CaseStudyCard key={cs.id} cs={cs} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
