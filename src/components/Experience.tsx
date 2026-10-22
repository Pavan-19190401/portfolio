"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EXPERIENCES = [
  {
    company: "CMRIT · Academic Research",
    role: "Team Leader — Deepfake Detection R&D",
    duration: "2025 — 2026",
    color: "var(--ember)",
    glowColor: "rgba(160, 42, 34, 0.25)",
    description:
      "Led the full project lifecycle of an advanced CNN-based deepfake forensics system from theoretical research to implementation.",
    highlights: [
      "Conducted extensive literature synthesis of 112 peer-reviewed research papers in facial manipulation detection",
      "Evaluated CNN architectures (XceptionNet, ResNet, VGG) averaging 89.73% baseline accuracy",
      "Engineered ensemble neural architectures achieving up to 99.65% classification accuracy",
      "Extensive analysis of model trade-offs, compute constraints, and real-time evaluation metrics",
    ],
  },
  {
    company: "Technook · Hyderabad",
    role: "AI Mentorship Intern",
    duration: "May — Jun 2024",
    color: "var(--ember)",
    glowColor: "rgba(160, 42, 34, 0.25)",
    description:
      "Hands-on AI and Machine Learning internship building end-to-end data preprocessing and predictive modeling pipelines.",
    highlights: [
      "Built and evaluated AI/ML models across structured and unstructured datasets",
      "Implemented comprehensive data preprocessing pipelines: cleaning, normalization, and feature engineering",
      "Assessed model performance rigorously using accuracy, precision, recall, and F1-score metrics",
    ],
  },
  {
    company: "Independent Engineering",
    role: "Full-Stack & Embedded Systems Developer",
    duration: "2022 — 2024",
    color: "var(--ember)",
    glowColor: "rgba(160, 42, 34, 0.25)",
    description:
      "Building production-grade full-stack web applications and hardware robotics systems.",
    highlights: [
      "Built real-time crypto analytics platform with CoinGecko API, TradingView charting, and MongoDB REST APIs",
      "Engineered autonomous human-following robot using Arduino Uno, ultrasonic & IR sensor fusion, and L293D motor drivers",
      "Proficient in Python, C/C++, Java, React.js, Node.js, Express.js, and core CS fundamentals (OOPs, DBMS, OS, Networks)",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".exp-grid-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      {/* Divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"
        aria-hidden="true"
      />

      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15 pointer-events-none blur-[150px]"
        style={{ backgroundColor: "var(--ember)" }}
      />

      <div className="section-container relative z-10">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-ember inline-block rounded-full" />
            <span className="text-ember text-xs font-bold tracking-[0.25em] uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Where I&apos;ve Been
          </h2>
          <p className="mt-4 text-base md:text-lg text-ash max-w-xl leading-relaxed font-normal">
            My professional journey through different roles and environments.
          </p>
        </div>

        {/* Clean Boxless Editorial Experience List */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="exp-item group pb-12 border-b border-white/10 last:border-b-0 flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 transition-colors duration-300"
            >
              {/* Left Column: Duration & Company */}
              <div className="md:w-1/3 flex-shrink-0">
                <span className="text-xs font-mono font-medium text-ash tracking-wider block mb-1">
                  {exp.duration}
                </span>
                <span
                  className="text-sm font-semibold tracking-wider uppercase block font-mono text-ember"
                >
                  {exp.company}
                </span>
              </div>

              {/* Right Column: Role Title, Description & Highlights */}
              <div className="md:w-2/3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-cloud transition-colors">
                  {exp.role}
                </h3>
                <p className="text-base text-ash leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-silver font-normal">
                      <span className="text-ember font-bold mt-0.5 text-xs">▸</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
