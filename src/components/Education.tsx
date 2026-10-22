"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const EDUCATION = [
  {
    institution: "CMR Institute of Technology, Hyderabad",
    detail: "B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
    year: "2022 — Present",
    type: "B.Tech Undergraduate",
  },
  {
    institution: "Sri Chaitanya Junior Kalashala",
    detail: "Intermediate (MPC — Mathematics, Physics, Chemistry)",
    year: "2020 — 2022",
    type: "Intermediate (MPC)",
  },
  {
    institution: "Bhashyam High School",
    detail: "Secondary School Certificate (SSC)",
    year: "2019 — 2020",
    type: "Schooling (SSC)",
  },
];

const CERTIFICATIONS = [
  {
    title: "AI Mentorship Internship",
    issuer: "Technook",
    year: "2024",
  },
  {
    title: "7-Day ML Bootcamp",
    issuer: "Google DSC × TensorFlow UG Hyderabad",
    year: "2024",
  },
  {
    title: "Entrepreneurship Orientation Program",
    issuer: "Orientation & Startup Incubation",
    year: "2024",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards reveal
      const cards = document.querySelectorAll(".edu-card");
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="relative py-32 md:py-48">
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"
        aria-hidden="true"
      />

      <div className="section-container">
        <SectionHeading
          eyebrow="Education & Credentials"
          title="Foundation"
          subtitle="Formal education, certifications, and technical background shaping my engineering journey."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Degree & Schooling */}
          {EDUCATION.map((edu, i) => (
            <div key={i} className="edu-card glass-card p-8 md:col-span-2">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="text-xs text-ember tracking-widest uppercase font-medium mb-2 block" style={{ fontFamily: "var(--font-display)" }}>
                    {edu.type}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-ash">{edu.detail}</p>
                </div>
                <span className="text-xs text-ash tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                  {edu.year}
                </span>
              </div>
            </div>
          ))}

          {/* Certifications */}
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="edu-card glass-card p-6 group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-ember transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                    {cert.title}
                  </h4>
                  <p className="text-xs text-ash">{cert.issuer}</p>
                </div>
                <span className="text-xs text-ash">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Resume Showcase Section */}
        <div id="resume" className="edu-card glass-card p-8 md:p-12 relative overflow-hidden border border-white/10 group hover:border-ember/40 transition-all duration-500">
          <div className="absolute top-0 right-0 w-80 h-80 bg-ember/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  Verified Curriculum Vitae
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                Vennu Manikanta Pavan &mdash; Resume
              </h3>
              <p className="text-sm md:text-base text-ash leading-relaxed">
                Review complete academic background, full-stack web applications, machine learning projects, and core technical competencies in a clean, ATS-compliant format.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-ember text-white font-medium text-sm tracking-wide shadow-[0_0_25px_rgba(160,42,34,0.4)] hover:bg-ember-bright transition-all duration-300"
              >
                <span>Open Resume PDF</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <a
                href="/resume.pdf"
                download="Vennu_Manikanta_Pavan_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span>Download</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
