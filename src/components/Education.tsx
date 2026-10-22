"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const EDUCATION = [
  {
    institution: "CMR Institute of Technology, Hyderabad",
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    year: "2022 — Present",
    detail: "Core specialization in Artificial Intelligence, Machine Learning, Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks.",
    type: "Undergraduate Degree",
  },
  {
    institution: "Sri Chaitanya Junior Kalashala",
    degree: "Intermediate (MPC)",
    year: "2020 — 2022",
    detail: "Focused on Mathematics, Physics, and Chemistry core foundation with strong problem-solving skills.",
    type: "Higher Secondary",
  },
  {
    institution: "Bhashyam High School",
    degree: "Secondary School Certificate (SSC)",
    year: "2019 — 2020",
    detail: "Foundational secondary education with focus on science, mathematics, and computers.",
    type: "Secondary School",
  },
];

const CERTIFICATIONS = [
  {
    title: "AI Mentorship Internship",
    issuer: "Technook",
    year: "2024",
    detail: "Hands-on evaluation of AI/ML models, data preprocessing pipelines, accuracy and F1-score evaluation.",
  },
  {
    title: "7-Day ML Bootcamp",
    issuer: "Google DSC × TensorFlow UG Hyderabad",
    year: "2024",
    detail: "Intensive training on deep learning, neural networks, and TensorFlow ecosystem.",
  },
  {
    title: "Entrepreneurship Orientation Program",
    issuer: "National Orientation Program",
    year: "2023",
    detail: "Foundational training on product design, technology innovation, and business execution.",
  },
];

const ACHIEVEMENTS = [
  { value: 112, suffix: "+", label: "Research Papers Reviewed" },
  { value: 99, suffix: ".65%", label: "CNN Ensemble Accuracy" },
  { value: 4, suffix: "+", label: "Key Systems Built" },
  { value: 3, suffix: "", label: "Industry Certifications" },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const achieveRef = useRef<HTMLDivElement>(null);

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

      // Achievement counters
      if (achieveRef.current) {
        const counters = achieveRef.current.querySelectorAll(".achieve-value");
        counters.forEach((el) => {
          const endValue = parseFloat(el.getAttribute("data-value") || "0");
          const suffix = el.getAttribute("data-suffix") || "";
          const obj = { value: 0 };

          gsap.to(obj, {
            value: endValue,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${Math.round(obj.value)}${suffix}`;
            },
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Education &amp; Certifications"
          title="Academic Foundation"
          subtitle="Formal education, research milestones, and professional certifications shaping my technical competencies."
        />

        {/* Education Timeline Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="edu-card glass-card p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="text-xs text-ember tracking-widest uppercase font-semibold font-mono"
                  >
                    {edu.type}
                  </span>
                  <span className="text-xs text-ash tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/5 font-mono">
                    {edu.year}
                  </span>
                </div>
                <h3
                  className="text-lg md:text-xl font-bold text-white mb-2"
                >
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-silver mb-3">
                  {edu.institution}
                </p>
                <p className="text-xs text-ash leading-relaxed">
                  {edu.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Subheading */}
        <div className="mb-8">
          <span className="text-xs font-bold tracking-[0.25em] text-ember uppercase block">
            Certifications &amp; Bootcamps
          </span>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={i}
              className="edu-card glass-card p-6 group hover:border-ember/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-ember font-semibold">
                  {cert.issuer}
                </span>
                <span className="text-xs text-ash font-mono">{cert.year}</span>
              </div>
              <h4
                className="text-base font-bold text-white mb-2 group-hover:text-ember transition-colors"
              >
                {cert.title}
              </h4>
              <p className="text-xs text-ash leading-relaxed">
                {cert.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Key Numerical Highlights */}
        <div ref={achieveRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.label} className="edu-card glass-card p-6 text-center border border-white/5 hover:border-white/15 transition-colors">
              <span
                className="achieve-value block text-2xl md:text-3xl font-extrabold text-ember mb-2 font-mono"
                data-value={a.value}
                data-suffix={a.suffix}
              >
                {a.value}{a.suffix}
              </span>
              <span className="text-xs text-ash tracking-wide font-medium">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
