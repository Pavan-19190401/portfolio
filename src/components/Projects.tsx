"use client";

import { useState } from "react";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
  glowColor: string;
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "crypto-marketplace",
    title: "Fullstack Crypto Marketplace",
    category: "Full-Stack & Fintech · 2024",
    description:
      "Real-time crypto analytics platform featuring live price tracking via CoinGecko API, TradingView technical charting, and a high-performance RESTful API layer backed by MongoDB.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CoinGecko API"],
    color: "#00E5FF",
    glowColor: "rgba(0, 229, 255, 0.35)",
    image: "/images/crypto-marketplace.jpg",
    githubUrl: "https://github.com/Pavan-19190401",
    liveUrl: "https://linkedin.com/in/manikanta-pavan-vennu1906",
  },
  {
    id: "deepfake-detection",
    title: "Deepfake Detection — CNN System",
    category: "AI & Computer Vision · 2025 – 2026",
    description:
      "Led lifecycle of a CNN-based facial forensics system; synthesized findings from 112 papers, benchmarked XceptionNet & ResNet architectures, and built ensembles reaching 99.65% accuracy.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "ResNet / VGG"],
    color: "#FC6B2F",
    glowColor: "rgba(252, 107, 47, 0.35)",
    image: "/images/deepfake-detection.jpg",
    githubUrl: "https://github.com/Pavan-19190401",
    liveUrl: "https://linkedin.com/in/manikanta-pavan-vennu1906",
  },
  {
    id: "human-following-robot",
    title: "Human Following Autonomous Robot",
    category: "Robotics & Embedded Systems · 2024",
    description:
      "Autonomous robot using sensor fusion for real-time human detection and tracking; movement logic engineered in C/C++ via an L293D motor driver with full custom circuit hardware design.",
    tech: ["Arduino Uno", "Ultrasonic & IR", "C/C++", "L293D Driver"],
    color: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.35)",
    image: "/images/human-following-robot.jpg",
    githubUrl: "https://github.com/Pavan-19190401",
    liveUrl: "https://linkedin.com/in/manikanta-pavan-vennu1906",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      {/* Divider */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"
        aria-hidden="true"
      />

      {/* Dynamic ambient background glow */}
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full opacity-25 pointer-events-none blur-[140px] transition-all duration-700"
        style={{
          backgroundColor:
            hoveredIndex !== null
              ? PROJECTS[hoveredIndex]?.color || "var(--ember)"
              : "var(--ember)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Minimal Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-ember inline-block rounded-full" />
            <span className="text-ember text-xs font-bold tracking-[0.25em] uppercase">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-4 text-base md:text-lg text-ash max-w-xl leading-relaxed font-normal">
            Highlighted full-stack platforms, deep learning architectures, and robotics engineered with precision.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl bg-obsidian flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <a
                href={project.liveUrl || project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[16/9] w-full overflow-hidden block cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Glowing gradient hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${project.glowColor} 0%, transparent 75%)`,
                  }}
                />

                {/* External Link Overlay Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-full text-white border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* Information Panel */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-mono font-medium text-ember tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-ember transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ash leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-silver font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
