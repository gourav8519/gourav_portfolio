"use client";

import { personalInfo } from "@/data/portfolio";
import { Download, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const techStack = ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "Redis", "SQL"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-8 sm:pt-0 sm:pb-0"
    >
      {/* Background — static blobs, no animate-float on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-primary-500/15 dark:bg-primary-500/8 rounded-full blur-[100px] md:animate-float" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] md:animate-float md:[animation-delay:3s]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-500/8 dark:bg-cyan-500/5 rounded-full blur-[80px] md:animate-float md:[animation-delay:1.5s]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-white)_70%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-dark-950)_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full animate-fade-in">
        {/* Name */}
        <h1 className="text-[2.5rem] leading-[1] sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 sm:mb-6 tracking-tight">
          <span className="text-dark-900 dark:text-white">I&apos;m </span>
          <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-purple-600 dark:from-primary-400 dark:via-primary-500 dark:to-purple-500 bg-clip-text text-transparent">
            Gourav
          </span>
          <br />
          <span className="text-dark-900 dark:text-white">Sahu</span>
        </h1>

        {/* Role */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-dark-100/80 dark:bg-dark-800/80">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 hidden sm:block" />
            <span className="text-sm sm:text-lg md:text-xl font-medium text-dark-600 dark:text-dark-300">
              Full Stack Developer &bull; MERN Stack
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 hidden sm:block" />
          </span>
        </div>

        {/* Description */}
        <p className="text-[13px] sm:text-base md:text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto mb-6 sm:mb-8 leading-[1.8] px-2 sm:px-0">
          I ship <strong className="text-dark-700 dark:text-dark-200">production SaaS products</strong> -{" "}
          from <strong className="text-dark-700 dark:text-dark-200">WhatsApp automation platforms</strong> to{" "}
          <strong className="text-dark-700 dark:text-dark-200">high-volume email systems</strong>.{" "}
          React + Node + Redis + MongoDB. Built for scale, not just demos.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-6 sm:mb-10">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-[10px] sm:text-xs font-medium text-dark-600 dark:text-dark-400 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center mb-8 sm:mb-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 sm:px-8 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-colors duration-200 active:scale-95 text-sm"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Get In Touch
          </a>
          <div className="flex gap-2">
            <a
              href="#projects"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white dark:bg-dark-800 border-2 border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-300 px-4 sm:px-8 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-colors duration-200 active:scale-95 text-xs sm:text-sm"
            >
              Projects
            </a>
            <a
              href={personalInfo.resumeLink}
              download="Gourav_Sahu_Resume.pdf"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white dark:bg-dark-800 border-2 border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-300 px-4 sm:px-8 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-colors duration-200 active:scale-95 text-xs sm:text-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 justify-center">
          {[
            { icon: FiGithub, href: personalInfo.github, label: "GitHub", hoverBg: "hover:bg-dark-900 hover:text-white dark:hover:bg-white dark:hover:text-dark-900" },
            { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn", hoverBg: "hover:bg-[#0077B5] hover:text-white dark:hover:bg-[#0077B5] dark:hover:text-white" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", hoverBg: "hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 flex items-center justify-center text-dark-500 dark:text-dark-400 transition-colors duration-200 hover:border-transparent ${social.hoverBg}`}
            >
              <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <a
        href="#about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-dark-300 dark:border-dark-600 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-[bounce_1.5s_infinite]" />
        </div>
      </a>
    </section>
  );
}
