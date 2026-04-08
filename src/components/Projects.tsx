"use client";

import { projects } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent dark:via-purple-950/10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 max-w-xl mx-auto text-base md:text-lg">
              Stuff I&apos;ve actually built and shipped to production
            </p>
          </div>
        </AnimatedSection>

        {/* Top 3 — Large Cards */}
        <div className="space-y-5 mb-5">
          {projects.slice(0, 3).map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group relative bg-white dark:bg-dark-800/80 md:dark:md:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 overflow-hidden hover:border-primary-500/40 dark:hover:border-primary-500/20 transition-colors duration-200">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Left — Gradient */}
                  <div
                    className={`md:col-span-2 p-6 md:p-10 bg-gradient-to-br ${project.color} relative overflow-hidden flex flex-col justify-center min-h-[160px] md:min-h-[220px]`}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-3xl font-bold text-white mb-1.5">
                        {project.title}
                      </h3>
                      <p className="text-white/80 font-medium text-sm">
                        {project.subtitle}
                      </p>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-4 px-4 py-1.5 bg-white/20 hover:bg-white/30 md:backdrop-blur-sm rounded-full text-white text-xs font-semibold transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right — Content */}
                  <div className="md:col-span-3 p-5 md:p-8 flex flex-col justify-center">
                    <p className="text-dark-500 dark:text-dark-400 leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="space-y-2 mb-5">
                      {project.highlights.map((item, j) => (
                        <div key={j} className="flex gap-2.5 items-start">
                          <div className="w-5 h-5 rounded-full bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-primary-600 dark:text-primary-400 text-[10px]">&#10003;</span>
                          </div>
                          <span className="text-sm text-dark-600 dark:text-dark-300">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-dark-50 dark:bg-dark-700/50 text-dark-600 dark:text-dark-400 rounded-md text-[11px] font-semibold border border-dark-200/50 dark:border-dark-600/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Side Projects heading */}
        <AnimatedSection delay={0.05}>
          <div className="mt-12 md:mt-16 mb-6 md:mb-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-dark-200 dark:bg-dark-700" />
              <h3 className="text-sm md:text-base font-semibold text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                Side Projects
              </h3>
              <div className="h-px flex-1 bg-dark-200 dark:bg-dark-700" />
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom 2 — Grid Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.slice(3).map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group bg-white dark:bg-dark-800/80 md:dark:md:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 overflow-hidden hover:border-primary-500/40 dark:hover:border-primary-500/20 transition-colors duration-200 h-full flex flex-col">
                {/* Gradient Header */}
                <div className={`h-28 sm:h-32 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10 text-center px-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/80 text-xs font-medium mt-1">{project.subtitle}</p>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4 flex-1">
                    {project.highlights.map((item, j) => (
                      <div key={j} className="flex gap-2 items-start">
                        <span className="text-primary-500 text-xs mt-0.5">&#10003;</span>
                        <span className="text-xs text-dark-600 dark:text-dark-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dark-100 dark:border-dark-700/50">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-dark-50 dark:bg-dark-700/50 text-dark-600 dark:text-dark-400 rounded-md text-[10px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-dark-900 dark:bg-white text-white dark:text-dark-900 text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
