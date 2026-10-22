"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate for mouse/fine-pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = -100;
    let mouseY = -100;
    let isVisible = false;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
      }
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isHovering ? 2.2 : 1})`;
    };

    const onMouseDown = () => {
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(0.65)`;
    };

    const onMouseUp = () => {
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isHovering ? 2.2 : 1})`;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = "1";
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-magnetic], .cursor-pointer'
      );
      if (interactive) {
        isHovering = true;
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(2.2)`;
        dot.style.boxShadow = "0 0 20px rgba(252, 107, 47, 0.95), 0 0 35px rgba(252, 107, 47, 0.5)";
      } else {
        isHovering = false;
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
        dot.style.boxShadow = "0 0 12px rgba(252, 107, 47, 0.85), 0 0 25px rgba(252, 107, 47, 0.4)";
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[999999] will-change-transform"
      style={{
        width: "9px",
        height: "9px",
        borderRadius: "50%",
        backgroundColor: "#FC6B2F",
        boxShadow: "0 0 12px rgba(252, 107, 47, 0.85), 0 0 25px rgba(252, 107, 47, 0.4)",
        opacity: 0,
        transition: "opacity 0.2s ease, transform 0.04s ease-out, box-shadow 0.2s ease",
      }}
      aria-hidden="true"
    />
  );
}
