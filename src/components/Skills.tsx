"use client";

import { skills } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs sm:text-sm font-semibold text-dark-700 dark:text-dark-300">{name}</span>
        <span className="text-[10px] font-medium text-dark-400 bg-dark-100 dark:bg-dark-700/50 px-2 py-0.5 rounded-full">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-dark-100 dark:bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 via-transparent to-primary-50/20 dark:from-primary-950/20 dark:via-transparent dark:to-primary-950/10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              Skills
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 max-w-xl mx-auto text-base md:text-lg">
              Technologies I use to bring ideas to life
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Frontend */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white dark:bg-dark-800/60 rounded-2xl border border-dark-200/60 dark:border-dark-700/40 p-5 md:p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <span className="text-white text-sm md:text-lg font-bold">F</span>
                </div>
                <h3 className="text-base md:text-lg font-bold">Frontend</h3>
              </div>
              <div className="space-y-3">
                {skills.frontend.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.04} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Backend */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white dark:bg-dark-800/60 rounded-2xl border border-dark-200/60 dark:border-dark-700/40 p-5 md:p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-white text-sm md:text-lg font-bold">B</span>
                </div>
                <h3 className="text-base md:text-lg font-bold">Backend</h3>
              </div>
              <div className="space-y-3">
                {skills.backend.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.04} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Tools */}
          <AnimatedSection delay={0.3}>
            <div className="bg-white dark:bg-dark-800/60 rounded-2xl border border-dark-200/60 dark:border-dark-700/40 p-5 md:p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                  <span className="text-white text-sm md:text-lg font-bold">T</span>
                </div>
                <h3 className="text-base md:text-lg font-bold">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="px-3 py-2 bg-dark-50 dark:bg-dark-700/50 text-dark-700 dark:text-dark-300 rounded-lg text-xs font-semibold border border-dark-200/50 dark:border-dark-600/30 hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Core Concepts & Highlights */}
          <AnimatedSection delay={0.35}>
            <div className="bg-white dark:bg-dark-800/60 rounded-2xl border border-dark-200/60 dark:border-dark-700/40 p-5 md:p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white text-sm md:text-lg font-bold">C</span>
                </div>
                <h3 className="text-base md:text-lg font-bold">Core Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.highlights.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="px-3 py-2 bg-dark-50 dark:bg-dark-700/50 text-dark-700 dark:text-dark-300 rounded-lg text-xs font-semibold border border-dark-200/50 dark:border-dark-600/30 hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
