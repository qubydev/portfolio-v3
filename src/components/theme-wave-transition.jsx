"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const styles = `
  .wave-transition {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  }

  .wave-transition svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .wave-path {
    animation: wave-sweep 0.8s ease-in-out forwards;
  }

  @keyframes wave-sweep {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100vh);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .wave-path {
      animation: none;
    }
  }
`;

export default function ThemeWaveTransition() {
  const { isDarkMode } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevTheme, setPrevTheme] = useState(isDarkMode);

  useEffect(() => {
    if (isDarkMode !== prevTheme) {
      setIsAnimating(true);
      setPrevTheme(isDarkMode);

      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [isDarkMode, prevTheme]);

  if (!isAnimating) return null;

  const fromColor = prevTheme ? "#000000" : "#ffffff";
  const toColor = isDarkMode ? "#000000" : "#ffffff";

  return (
    <>
      <style>{styles}</style>
      <div className="wave-transition">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={fromColor} stopOpacity="1" />
              <stop offset="50%" stopColor={fromColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor={toColor} stopOpacity="1" />
            </linearGradient>
            <filter id="wave-blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>
          <path
            className="wave-path"
            d="M0,0 Q480,80 960,0 T1920,0 L1920,1080 L0,1080 Z"
            fill="url(#wave-gradient)"
            filter="url(#wave-blur)"
          />
        </svg>
      </div>
    </>
  );
}
