import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.8,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.8,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const showCursor = () => {
      gsap.to(cursorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
      });
    };

    const hideCursor = () => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-black rounded-full pointer-events-none z-9999"
      style={{
        transform: "translate(-50%, -50%)",
        opacity: 0,
      }}
    />
  );
};

export default MouseFollower;