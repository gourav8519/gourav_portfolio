"use client";

import { skills } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";

function SkillTag({ name, hoverColor }: { name: string; hoverColor: string }) {
  return (
    <span
      className={`px-3.5 py-2 bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-xl text-sm font-semibold border border-dark-200 dark:border-dark-700 ${hoverColor} transition-colors duration-200 cursor-default shadow-sm`}
    >
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

        {/* 2x2 grid on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Frontend */}
          <AnimatedSection delay={0.05}>
            <div className="bg-white dark:bg-dark-800/80 md:dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 p-5 md:p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <span className="text-white text-sm md:text-lg font-bold">F</span>
                </div>
                <h3 className="text-base md:text-lg font-bold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, i) => (
                  <SkillTag key={skill} name={skill} hoverColor="hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400" />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Backend */}
          <AnimatedSection delay={0.08}>
            <div className="bg-white dark:bg-dark-800/80 md:dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 p-5 md:p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-white text-sm md:text-lg font-bold">B</span>
                </div>
                <h3 className="text-base md:text-lg font-bold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, i) => (
                  <SkillTag key={skill} name={skill} hoverColor="hover:border-green-500/50 hover:text-green-600 dark:hover:text-green-400" />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tools */}
          <AnimatedSection delay={0.05}>
            <div className="bg-white dark:bg-dark-800/80 md:dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 p-5 md:p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                  <span className="text-white text-sm md:text-lg font-bold">T</span>
                </div>
                <h3 className="text-base md:text-lg font-bold">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, i) => (
                  <SkillTag key={tool} name={tool} hoverColor="hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400" />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Core Concepts */}
          <AnimatedSection delay={0.08}>
            <div className="bg-white dark:bg-dark-800/80 md:dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 p-5 md:p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white text-sm md:text-lg font-bold">C</span>
                </div>
                <h3 className="text-base md:text-lg font-bold">Core Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.highlights.map((item, i) => (
                  <SkillTag key={item} name={item} hoverColor="hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400" />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
