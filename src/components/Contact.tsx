"use client";

import { personalInfo } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "6a70ef4a-4bee-44ea-b4d9-b3708e4b8641",
          name: form.name,
          email: form.email,
          message: form.message,
          from_name: "Portfolio Contact Form",
          subject: `New message from ${form.name} via Portfolio`,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        // Fallback to mailto
        openMailto();
      }
    } catch {
      // Fallback to mailto if API fails
      openMailto();
    }
  };

  const openMailto = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Gourav,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, "_self");
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-primary-500/[0.05] dark:via-primary-500/[0.02] dark:to-primary-500/[0.05]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Let&apos;s Work{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 max-w-xl mx-auto text-base md:text-lg">
              Got a project idea or opportunity? Drop me a message!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left — Contact Info + Map/CTA */}
          <AnimatedSection delay={0.1} className="space-y-4">
            {/* Contact Cards */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-4 p-5 bg-white dark:bg-dark-800/80 dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 hover:border-primary-500/50 dark:hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-dark-400 font-medium uppercase tracking-wider">Email</div>
                <div className="text-sm font-semibold text-dark-900 dark:text-white truncate">
                  {personalInfo.email}
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-dark-300 dark:text-dark-600 group-hover:text-primary-500 shrink-0 transition-colors" />
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="group flex items-center gap-4 p-5 bg-white dark:bg-dark-800/80 dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 hover:border-primary-500/50 dark:hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-dark-400 font-medium uppercase tracking-wider">Phone</div>
                <div className="text-sm font-semibold text-dark-900 dark:text-white">
                  {personalInfo.phone}
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-dark-300 dark:text-dark-600 group-hover:text-green-500 shrink-0 transition-colors" />
            </a>

            <div className="flex items-center gap-4 p-5 bg-white dark:bg-dark-800/80 dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-dark-400 font-medium uppercase tracking-wider">Location</div>
                <div className="text-sm font-semibold text-dark-900 dark:text-white">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-dark-900 dark:bg-white text-white dark:text-dark-900 font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <FiGithub className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0077B5] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <FiLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Quick Info Box — fills blank space */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">Why work with me?</h4>
              <ul className="space-y-2.5 text-sm text-white/90">
                <li className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>2+ years building production-grade SaaS products</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Systems handling 10K+ users & 1M+ daily operations</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Full stack: pixel-perfect UI to scalable backend</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Strong in system design & real-time architectures</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-dark-800/80 dark:backdrop-blur-sm rounded-2xl border border-dark-200/60 dark:border-dark-600/50 p-6 md:p-8 space-y-5 h-full flex flex-col"
            >
              <div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">Send me a message</h3>
                <p className="text-sm text-dark-400">I&apos;ll get back to you within 24 hours.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900/50 border border-dark-200 dark:border-dark-700/50 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all text-sm"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900/50 border border-dark-200 dark:border-dark-700/50 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all text-sm"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full h-[calc(100%-28px)] min-h-[150px] px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900/50 border border-dark-200 dark:border-dark-700/50 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all resize-none text-sm"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:opacity-70 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 active:scale-[0.98] text-sm"
              >
                {status === "sending" ? (
                  <>Sending...</>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
