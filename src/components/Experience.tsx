"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EXPERIENCES = [
  {
    company: "Technook",
    role: "AI Mentorship Intern",
    duration: "May 2024 — Jun 2024",
    location: "Hyderabad, India",
    color: "var(--ember)",
    glowColor: "rgba(160, 42, 34, 0.25)",
    description:
      "Built and evaluated AI/ML models; implemented comprehensive data preprocessing pipelines and assessed performance using rigorous machine learning evaluation metrics.",
    highlights: [
      "Built and evaluated AI/ML models across predictive modeling and data pipelines",
      "Implemented data preprocessing pipelines (cleaning, normalization, feature engineering)",
      "Assessed performance benchmarks using accuracy, precision, recall, and F1-score",
    ],
  },
  {
    company: "Research & Development Project",
    role: "Team Leader — Deepfake Detection System",
    duration: "2025 — 2026",
    location: "CMR Institute of Technology",
    color: "var(--ember)",
    glowColor: "rgba(160, 42, 34, 0.25)",
    description:
      "Led full project lifecycle of a CNN-based deepfake detection system; based on a prior review of 112 papers where CNN architectures averaged 89.73% accuracy and ensembles reached 99.65%.",
    highlights: [
      "Led end-to-end project lifecycle and guided architecture decisions as team leader",
      "Benchmarked deep learning architectures (XceptionNet, ResNet, VGG) in Python, TensorFlow/Keras, and OpenCV",
      "Designed ensemble techniques achieving up to 99.65% accuracy; analyzed model trade-offs in depth",
    ],
  },
  {
    company: "Independent Systems & Open Source",
    role: "Full-Stack Developer & Systems Builder",
    duration: "2024 — Present",
    location: "Hyderabad, India",
    color: "var(--ember)",
    glowColor: "rgba(160, 42, 34, 0.25)",
    description:
      "Designing and shipping production-ready web applications, LLM observability tooling, and autonomous embedded hardware systems.",
    highlights: [
      "Engineered TraceLens: LLM prompt waterfall latency tracing, token cost analytics, and neural telemetry",
      "Built CryptoSphere: live crypto tracking with CoinGecko API, TradingView charting, and MongoDB REST API",
      "Programmed Human Following Robot with sensor fusion (Ultrasonic + IR) in C/C++ on Arduino Uno",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".exp-item");
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
              Experience &amp; Leadership
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Work &amp; Project Experience
          </h2>
          <p className="mt-4 text-base md:text-lg text-ash max-w-xl leading-relaxed font-normal">
            Professional internships, technical project leadership, and real-time system implementations.
          </p>
        </div>

        {/* Editorial Experience List */}
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
                <span className="text-sm font-semibold tracking-wider uppercase block font-mono text-ember mb-1">
                  {exp.company}
                </span>
                <span className="text-xs text-ash/80 block">
                  {exp.location}
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
