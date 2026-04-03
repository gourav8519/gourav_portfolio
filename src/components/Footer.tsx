"use client";

import { personalInfo, navLinks } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-dark-900 border-t border-dark-200/60 dark:border-dark-800/60">
      {/* Back to top */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <a
          href="#home"
          className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-500/25 hover:bg-primary-700 transition-colors hover:scale-110 active:scale-95"
        >
          <FiArrowUp className="w-4 h-4" />
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-extrabold bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent"
            >
              {`<${personalInfo.name.split(" ")[0]} />`}
            </a>
            <p className="text-sm text-dark-500 dark:text-dark-400 mt-2">
              Building products that matter.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-2 justify-center md:justify-end">
            {[
              { icon: FiGithub, href: personalInfo.github },
              { icon: FiLinkedin, href: personalInfo.linkedin },
              { icon: FiMail, href: `mailto:${personalInfo.email}` },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-200/60 dark:border-dark-800/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-dark-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
