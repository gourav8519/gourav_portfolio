"use client";

import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "@/data/portfolio";
import { Briefcase, Code, Zap, Users, Layout, Server, Cpu, Database } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "2+", icon: Briefcase, color: "from-primary-500 to-primary-600" },
  { label: "Projects Shipped", value: "7+", icon: Code, color: "from-purple-500 to-violet-600" },
  { label: "Users Impacted", value: "10K+", icon: Users, color: "from-green-500 to-emerald-600" },
  { label: "Emails/Day", value: "1M+", icon: Zap, color: "from-orange-500 to-red-500" },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-dark-50/50 dark:bg-dark-900/30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Passionate About Building{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                At Scale
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Stats Row */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center p-6 bg-white dark:bg-dark-800/80 dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 hover:border-primary-500/40 dark:hover:border-primary-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-dark-500 dark:text-dark-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* About Content */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto bg-white dark:bg-dark-800/80 dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 p-8 md:p-10">
            <div className="space-y-5 text-dark-600 dark:text-dark-300 leading-relaxed">
              <p className="text-lg">
                I&apos;m a <strong className="text-dark-900 dark:text-white">Full Stack Developer</strong> based
                in Bhopal, India, specializing in building products that solve real-world problems at scale.
              </p>

              <p>
                Currently at <strong className="text-dark-900 dark:text-white">Pabbly</strong>, I architect and build
                marketing automation products — from <strong className="text-dark-900 dark:text-white">WhatsApp ChatFlow
                automation</strong> with visual drag-and-drop workflow builders to{" "}
                <strong className="text-dark-900 dark:text-white">high-volume email systems</strong> processing
                1M+ emails daily using Redis queues, SMTP/PMTA pipelines, and Socket.io for real-time tracking.
              </p>

              <p>
                I thrive in <strong className="text-dark-900 dark:text-white">zero-to-one product development</strong> — taking
                an idea from concept to a fully functional system used by thousands. My toolkit includes{" "}
                <strong className="text-dark-900 dark:text-white">React.js, Next.js, Node.js, TypeScript, Redis, MongoDB</strong>,
                and I love working with event-driven architectures and real-time systems.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 active:scale-95 text-sm"
              >
                Let&apos;s Connect
              </a>
              <a
                href={personalInfo.resumeLink}
                download="Gourav_Sahu_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 px-6 py-3 rounded-xl font-semibold hover:bg-dark-200 dark:hover:bg-dark-600 transition-all duration-300 active:scale-95 text-sm"
              >
                Download CV
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* What I Do */}
        <AnimatedSection delay={0.3}>
          <div className="mt-8 md:mt-10">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
              What I <span className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">Bring to the Table</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Layout, title: "Frontend", desc: "React, Next.js, TypeScript — responsive, animated, pixel-perfect UIs", color: "from-primary-500 to-blue-600" },
                { icon: Server, title: "Backend", desc: "Node.js, Express, Nest.js — scalable APIs, event-driven systems", color: "from-green-500 to-emerald-600" },
                { icon: Database, title: "Database", desc: "MongoDB, MySQL, Redis — schema design, caching, optimization", color: "from-purple-500 to-violet-600" },
                { icon: Cpu, title: "System Design", desc: "Queues, workers, real-time pipelines, microservices architecture", color: "from-orange-500 to-red-500" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-5 bg-white dark:bg-dark-800/80 dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 hover:border-primary-500/40 dark:hover:border-primary-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-dark-900 dark:text-white text-sm mb-1.5">{item.title}</h4>
                  <p className="text-xs text-dark-500 dark:text-dark-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
