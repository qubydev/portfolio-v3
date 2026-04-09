"use client";

import React from "react";

const css = `
.tt-expand g circle,
.tt-expand g path {
  transform-origin: center;
  transition: transform calc(var(--tt-duration) * .65) cubic-bezier(0,0,0,1.25) calc(var(--tt-duration) * .35);
}
.tt-expand :first-child path {
  transition-property: transform, d;
  transition-duration: calc(var(--tt-duration) * .6);
  transition-timing-function: cubic-bezier(0,0,0.5,1);
}
.tt-toggled .tt-expand g circle {
  transform: scale(1.4);
  transition-delay: 0s;
}
.tt-toggled .tt-expand g path {
  transform: scale(.75);
  transition-delay: 0s;
}
.tt-toggled .tt-expand :first-child path {
  d: path("M-14-3h25a10.7 10.7 0 1 0 17 13v30H-5z");
  transition-delay: calc(var(--tt-duration) * 0.4);
  transition-timing-function: cubic-bezier(0,0,0,1.25);
}
@supports not (d:path("")) {
  .tt-toggled .tt-expand :first-child path {
    transform: translate3d(-14px,8px,0);
  }
}
@media (prefers-reduced-motion: reduce) {
  .tt-expand * { transition: none !important; }
}
`;

export default function ThemeToggle({ toggled, onToggle }) {
  return (
    <>
      <style>{css}</style>
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={onToggle}
        style={{ "--tt-duration": "500ms" }}
        className={`inline-flex size-8 items-center justify-center rounded-md bg-secondary text-muted-foreground hover:text-secondary-foreground transition-colors hover:bg-secondary/80 cursor-pointer border-none ${toggled ? " tt-toggled" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          fill="currentColor"
          aria-hidden="true"
          className="tt-expand"
          viewBox="0 0 24 24"
        >
          <clipPath id="tt-expand-clip">
            <path d="M0-11h19A1 1 0 0 0 36 2v22H0Z" />
          </clipPath>
          <g clipPath="url(#tt-expand-clip)">
            <circle cx={12} cy={12} r={6.4} />
            <path d="M13.7 2.7c0 1-.7 1.8-1.7 1.8s-1.8-.8-1.8-1.8S11 1 12 1s1.7.7 1.7 1.7zm-3.5 19.5c0-1 .8-1.7 1.8-1.7s1.6.6 1.6 1.6-.7 1.8-1.7 1.8-1.8-.8-1.8-1.8zm11.5-8c-1 0-1.7-.7-1.7-1.7s.7-1.8 1.7-1.8 1.8.8 1.8 1.8-.9 1.6-1.9 1.6zM2.2 10.7c1 0 1.8.8 1.8 1.8s-.8 1.7-1.8 1.7-1.7-.7-1.7-1.7.7-1.8 1.7-1.8zm4.4-5.3c0 1-.8 1.7-1.7 1.7-1 0-1.8-.7-1.8-1.7s.8-1.8 1.8-1.8 1.7.8 1.7 1.8zm12.5 16c-1 0-1.8-.8-1.8-1.8s.8-1.7 1.8-1.7 1.7.7 1.7 1.7-.8 1.8-1.7 1.8zm1.8-16c0 1-.8 1.7-1.8 1.7s-1.8-.8-1.8-1.7c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8zm-16 12.4c1 0 1.7.8 1.7 1.8s-.7 1.7-1.7 1.7-1.8-.8-1.8-1.7c0-1 .8-1.8 1.8-1.8z" />
          </g>
        </svg>
      </button>
    </>
  );
}