"use client";

import { useMemo } from "react";
import SectionHeading from "./SectionHeading";
import DriftWall, { DriftWallItem } from "./DriftWall";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const SKILLS: Skill[] = [
  // Languages & CS
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", category: "Languages" },
  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00", category: "Languages" },
  { name: "C / C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C", category: "Languages" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", category: "Languages" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", category: "Languages" },
  // Web & Full-Stack
  { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "Full-Stack" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E", category: "Full-Stack" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express/ffffff", category: "Full-Stack" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", category: "Full-Stack" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", category: "Full-Stack" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", category: "Full-Stack" },
  { name: "REST APIs", icon: "https://api.iconify.design/dashicons:rest-api.svg?color=%2300d8d6", category: "Full-Stack" },
  // Machine Learning & AI
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00", category: "ML / AI" },
  { name: "Keras", icon: "https://cdn.simpleicons.org/keras/D00000", category: "ML / AI" },
  { name: "Scikit-Learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E", category: "ML / AI" },
  { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/5C3EE8", category: "ML / AI" },
  { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243", category: "ML / AI" },
  { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458", category: "ML / AI" },
  // Tools & Embedded
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", category: "Tools" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff", category: "Tools" },
  { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC", category: "Tools" },
  { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00", category: "Tools" },
  { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter/F37626", category: "Tools" },
  { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/00979D", category: "Embedded" },
];

export default function Skills() {
  const driftWallItems: DriftWallItem[] = useMemo(() => {
    return SKILLS.map((skill) => ({
      image: "/images/skill-tile-bg.png",
      title: skill.name,
      icon: skill.icon,
    }));
  }, []);

  return (
    <section id="skills" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"
        aria-hidden="true"
      />

      <div className="section-container">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="My Arsenal"
          subtitle="Technologies I use to bring ideas to life. Interactive 3D drift wall showcasing frontend, backend, design, and AI capabilities."
          align="center"
        />

        {/* DriftWall 3D animated skills container - full screen full bleed */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-screen overflow-hidden -translate-x-12 sm:-translate-x-16">
          <DriftWall
            items={driftWallItems}
            columns={6}
            tileWidth={210}
            tileHeight={138}
            gap={20}
            tilt={14}
            turn={-16}
            perspective={1000}
            depth={100}
            speed={40}
            direction="up"
            variance={0.4}
            parallax={0.6}
            lift={65}
            fade={0.4}
            dim={0.6}
            overlayColor="#050505"
          />
        </div>
      </div>
    </section>
  );
}
