"use client";

import { useState } from "react";
import Folder, { FolderItem } from "./Folder";

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
    id: "tracelens",
    title: "TraceLens",
    category: "LLM Observability & Telemetry · 2024",
    description:
      "Enterprise-grade LLM observability platform featuring prompt waterfall latency tracing, token cost monitoring, and neural telemetry visualizations for production AI workflows.",
    tech: ["Next.js", "React", "TypeScript", "LLM Telemetry", "FastAPI", "Tailwind CSS"],
    color: "#00F0FF",
    glowColor: "rgba(0, 240, 255, 0.35)",
    image: "/images/tracelens.jpg",
    githubUrl: "https://github.com/Pavan-19190401/tracelens.git",
    liveUrl: "https://dashboard-iota-beige-48.vercel.app/login",
  },
  {
    id: "cryptosphere",
    title: "CryptoSphere",
    category: "Full-Stack & Fintech · 2024",
    description:
      "Real-time cryptocurrency analytics and trading platform featuring live price tracking via CoinGecko API, interactive TradingView technical charting, and a secure RESTful API backed by MongoDB.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CoinGecko API", "TradingView"],
    color: "#F7931A",
    glowColor: "rgba(247, 147, 26, 0.35)",
    image: "/images/cryptosphere.jpg",
    githubUrl: "https://github.com/Pavan-19190401/CryptoSphere.git",
    liveUrl: "https://cryptosphere-orpin.vercel.app/",
  },
  {
    id: "deepfake-detection",
    title: "Deepfake Detection — CNN System",
    category: "AI & Computer Vision · 2025 – 2026",
    description:
      "Led lifecycle of a CNN-based facial forensics system; synthesized findings from 112 papers, benchmarked XceptionNet & ResNet architectures, and built ensembles reaching 99.65% accuracy.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "ResNet / VGG", "Ensemble Models"],
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
    tech: ["Arduino Uno", "Ultrasonic & IR", "C/C++", "L293D Driver", "Sensor Fusion"],
    color: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.35)",
    image: "/images/human-following-robot.jpg",
    githubUrl: "https://github.com/Pavan-19190401",
    liveUrl: "https://linkedin.com/in/manikanta-pavan-vennu1906",
  },
];

const FOLDER_ITEMS: FolderItem[] = PROJECTS.map((project) => ({
  title: project.title,
  category: project.category,
  image: project.image,
  description: project.description,
  liveUrl: project.liveUrl,
  githubUrl: project.githubUrl,
}));

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [folderOpen, setFolderOpen] = useState<boolean>(false);
  const [folderMode, setFolderMode] = useState<'flap' | 'book'>('flap');
  const [folderVariant, setFolderVariant] = useState<'glass' | 'solid'>('glass');
  const [folderColor, setFolderColor] = useState<string>('#FC6B2F');

  const scrollToProject = (index: number) => {
    const target = PROJECTS[index];
    if (!target) return;
    const el = document.getElementById(`project-${target.id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHoveredIndex(index);
    }
  };

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
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
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

        {/* ── React Bits 3D Interactive Folder Showcase ── */}
        <div className="mb-16 md:mb-20 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 md:p-10 relative overflow-hidden backdrop-blur-sm">
          {/* Subtle Ambient Radial Lighting */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-500"
            style={{ backgroundColor: folderColor }}
          />

          {/* Folder Toolbar Controls */}
          <div data-folder-control="true" className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-white/5 relative z-10">
            <div className="flex items-center gap-2 text-xs text-ash font-mono">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: folderColor }} />
              <span className="text-white font-semibold">Interactive Archive</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="hidden sm:inline text-ash/80">Click folder to open · Drag items · Click to zoom</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Open / Close Toggle Button */}
              <button
                type="button"
                data-folder-control="true"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  setFolderOpen((prev) => !prev);
                }}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-white/15 bg-white/5 text-cloud hover:bg-white/15 hover:border-white/30 transition-all cursor-pointer active:scale-95"
              >
                {folderOpen ? "Close Folder" : "Open Folder"}
              </button>

              {/* Mode Toggle */}
              <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-xs font-mono">
                <button
                  type="button"
                  data-folder-control="true"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFolderMode('flap');
                  }}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    folderMode === 'flap' ? 'bg-white/20 text-white font-bold' : 'text-ash hover:text-white'
                  }`}
                >
                  Flap
                </button>
                <button
                  type="button"
                  data-folder-control="true"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFolderMode('book');
                  }}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    folderMode === 'book' ? 'bg-white/20 text-white font-bold' : 'text-ash hover:text-white'
                  }`}
                >
                  Book
                </button>
              </div>

              {/* Variant Toggle */}
              <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-xs font-mono">
                <button
                  type="button"
                  data-folder-control="true"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFolderVariant('glass');
                  }}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    folderVariant === 'glass' ? 'bg-white/20 text-white font-bold' : 'text-ash hover:text-white'
                  }`}
                >
                  Glass
                </button>
                <button
                  type="button"
                  data-folder-control="true"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFolderVariant('solid');
                  }}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    folderVariant === 'solid' ? 'bg-white/20 text-white font-bold' : 'text-ash hover:text-white'
                  }`}
                >
                  Solid
                </button>
              </div>

              {/* Palette Accent Dots */}
              <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-white/10">
                {[
                  { name: "Vibrant Orange", hex: "#FC6B2F" },
                  { name: "Deep Crimson", hex: "#A02A22" },
                  { name: "Electric Cyan", hex: "#00F0FF" },
                ].map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    title={c.name}
                    data-folder-control="true"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      setFolderColor(c.hex);
                    }}
                    style={{ backgroundColor: c.hex }}
                    className={`w-4 h-4 rounded-full transition-transform cursor-pointer ${
                      folderColor === c.hex ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 3D Folder Canvas Stage */}
          <div className="min-h-[380px] sm:min-h-[420px] md:min-h-[480px] w-full flex items-center justify-center relative py-6 select-none overflow-visible">
            <Folder
              label="PROJECTS"
              items={FOLDER_ITEMS}
              mode={folderMode}
              variant={folderVariant}
              color={folderColor}
              paperColor="#0f0f14"
              theme="dark"
              size={1.15}
              layout="spread"
              tabPosition="right"
              open={folderOpen}
              onOpenChange={setFolderOpen}
              draggable={true}
              zoomOnClick={true}
              peek={true}
              intro={true}
              onItemClick={(item, index) => scrollToProject(index)}
            />
          </div>

          {/* Stage Footer Cue */}
          <div className="text-center pt-2 pb-1 relative z-10">
            <p className="text-[11px] font-mono text-ash/70">
              💡 Hover to tilt · Click to swing open · Click any project card to inspect &amp; jump below
            </p>
          </div>
        </div>

        {/* Detailed Project Grid Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Project Archive &amp; Live Demos
            </h3>
            <p className="text-xs md:text-sm text-ash mt-1">
              Explore complete source repositories, architecture details, and live production deployments.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, i) => (
            <div
              id={`project-${project.id}`}
              key={project.id}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl bg-obsidian flex flex-col justify-between scroll-mt-24"
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

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-white/5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-ember hover:text-black border border-white/15 hover:border-ember transition-all duration-300 group/btn"
                    >
                      <span>Live Demo</span>
                      <svg
                        className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-ash hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-300"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
