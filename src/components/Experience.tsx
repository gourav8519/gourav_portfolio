"use client";

import { experiences, education, certifications } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, BookOpen, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-dark-50/50 dark:bg-dark-900/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Where I&apos;ve{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                Worked
              </span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 max-w-xl mx-auto text-lg">
              My professional journey building products at scale
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[27px] md:left-[31px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 via-primary-300 to-dark-200 dark:from-primary-500 dark:via-primary-700 dark:to-dark-700" />

          {/* Experience Items */}
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative flex gap-5 md:gap-7 mb-8">
                {/* Timeline Dot */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                      exp.current
                        ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-primary-500/25"
                        : "bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-400 border border-dark-200 dark:border-dark-700"
                    }`}
                  >
                    <Briefcase className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-dark-800/60 rounded-2xl border border-dark-200/60 dark:border-dark-700/40 p-5 md:p-7 hover:border-primary-500/40 dark:hover:border-primary-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        exp.current
                          ? "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400"
                          : "bg-dark-100 dark:bg-dark-700/50 text-dark-500 dark:text-dark-400"
                      }`}>
                        {exp.period}
                      </div>
                      <div className="text-xs text-dark-400 mt-1">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.highlights.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-dark-600 dark:text-dark-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Education */}
          <AnimatedSection delay={0.3}>
            <div className="relative flex gap-5 md:gap-7">
              <div className="relative z-10 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 flex items-center justify-center text-dark-500 dark:text-dark-400">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>

              <div className="flex-1 bg-white dark:bg-dark-800/60 rounded-2xl border border-dark-200/60 dark:border-dark-700/40 p-5 md:p-7 hover:border-primary-500/40 dark:hover:border-primary-500/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                      {education.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {education.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-dark-100 dark:bg-dark-700/50 text-dark-500 dark:text-dark-400">
                      {education.period}
                    </div>
                    <div className="text-sm font-bold text-dark-900 dark:text-white mt-1">
                      CGPA: {education.cgpa}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.4}>
            <div className="relative flex gap-5 md:gap-7 mt-8">
              <div className="relative z-10 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 flex items-center justify-center text-dark-500 dark:text-dark-400">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <div className="flex-1 bg-white dark:bg-dark-800/60 rounded-2xl border border-dark-200/60 dark:border-dark-700/40 p-5 md:p-7">
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-dark-900 dark:text-white">{cert.name}</span>
                        <span className="text-sm text-dark-400"> — {cert.provider}, {cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
