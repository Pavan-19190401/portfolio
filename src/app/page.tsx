"use client";

import { useState, useCallback } from "react";
import SmoothScroll from "@/lib/smooth-scroll";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import StaggeredMenu from "@/components/StaggeredMenu";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* Loading screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Scroll progress bar */}
      {!isLoading && <ScrollProgress />}



      {/* Navigation — StaggeredMenu stacked on left side */}
      {!isLoading && (
        <StaggeredMenu
          position="left"
          items={[
            { label: "Projects", ariaLabel: "Go to Projects section", link: "#projects" },
            { label: "Skills", ariaLabel: "Go to Skills section", link: "#skills" },
            { label: "Experience", ariaLabel: "Go to Experience section", link: "#experience" },
            { label: "Education", ariaLabel: "Go to Education section", link: "#education" },
            { label: "Resume", ariaLabel: "Open Official Resume PDF", link: "/resume.pdf" },
            { label: "Contact", ariaLabel: "Go to Contact section", link: "#contact" },
          ]}
          socialItems={[
            { label: "GitHub", link: "https://github.com/Pavan-19190401" },
            { label: "LinkedIn", link: "https://www.linkedin.com/in/manikanta-pavan-vennu1906" },
            { label: "Email", link: "mailto:manikantapavanv@gmail.com" },
            { label: "Phone", link: "tel:+917396870319" },
          ]}
          displaySocials={true}
          displayItemNumbering={true}
          colors={["#0d0d0f", "#1e1e24"]}
          accentColor="#A02A22"
          menuButtonColor="#ffffff"
          openMenuButtonColor="#A02A22"
        />
      )}

      {/* Main content */}
      <SmoothScroll>
        <main>
          {/* Hero — cinematic editorial section */}
          <Hero />

          <Introduction />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
