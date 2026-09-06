export default function VinylDisk(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 400"
      version="1.0"
      {...props}
    >
      <defs>
        <radialGradient
          id="d"
          xlinkHref="#a"
          gradientUnits="userSpaceOnUse"
          cy="209.67"
          cx="289.43"
          gradientTransform="rotate(135 303.861 230.215)scale(1.22979 2.77398)"
          r="92.5"
        />
        <radialGradient
          id="c"
          xlinkHref="#a"
          gradientUnits="userSpaceOnUse"
          cy="209.67"
          cx="289.43"
          gradientTransform="rotate(-45 127.054 450.743)scale(1.22979 2.77398)"
          r="92.5"
        />
        <radialGradient
          id="f"
          gradientUnits="userSpaceOnUse"
          cy="192.84"
          cx="199.28"
          gradientTransform="matrix(0 2.8729 -1 0 392.84 -372.51)"
          r="53.688"
        >
          <stop stopColor="#f7f7f7" offset="0" />
          <stop stopColor="#e1e1e1" offset="1" />
        </radialGradient>
        <radialGradient
          id="e"
          gradientUnits="userSpaceOnUse"
          cy="192.84"
          cx="199.28"
          gradientTransform="matrix(0 2.7782 -.82388 0 358.88 -353.65)"
          r="68.844"
        >
          <stop stopColor="#6c6c6c" offset="0" />
          <stop stopColor="#3e3e3e" offset="1" />
        </radialGradient>
        <linearGradient id="a">
          <stop stopColor="#fff" offset="0" />
          <stop stopColor="#fff" stopOpacity="0" offset="1" />
        </linearGradient>
        <filter id="b">
          <feGaussianBlur stdDeviation="3.7" />
        </filter>
      </defs>
      <g fillRule="evenodd">
        <path
          filter="url(#b)"
          d="M202.71 19c-102.12 0-185 82.88-185 185 .004 102.12 82.88 185 185 185s185-82.88 185-185-82.88-185-185-185m0 179.81c2.87 0 5.19 2.32 5.19 5.19a5.185 5.185 0 1 1-10.37 0c0-2.87 2.32-5.19 5.18-5.19"
          style={{ color: "#000" }}
          fillOpacity=".509"
        />
        <path
          style={{ color: "#000" }}
          d="M200 15C97.88 15 15 97.88 15 200s82.88 185 185 185 185-82.88 185-185S302.12 15 200 15m0 179.81c2.87 0 5.19 2.32 5.19 5.19s-2.32 5.19-5.19 5.19-5.19-2.32-5.19-5.19 2.32-5.19 5.19-5.19"
        />
        <path
          d="M200 132.66c-37.16 0-67.34 30.18-67.34 67.34s30.18 67.34 67.34 67.34 67.34-30.18 67.34-67.34-30.18-67.34-67.34-67.34m0 62.9c2.45 0 4.44 1.99 4.44 4.44s-1.99 4.44-4.44 4.44-4.44-1.99-4.44-4.44 1.99-4.44 4.44-4.44"
          style={{ color: "#000" }}
          fill="#333"
        />
        <path
          style={{ color: "#000" }}
          d="M200 15C97.88 15 15 97.88 15 200s82.88 185 185 185 185-82.88 185-185S302.12 15 200 15m0 3.594c100.15 0 181.44 81.257 181.44 181.41S300.15 381.444 200 381.444s-181.44-81.29-181.44-181.44C18.563 99.854 99.851 18.594 200 18.594"
        />
        <path
          d="M293.56 200c0 51.65-41.91 93.59-93.56 93.59v87.85c100.15 0 181.44-81.29 181.44-181.44z"
          style={{ color: "#000" }}
          fill="url(#c)"
        />
        <path
          d="M106.44 200c0-51.65 41.91-93.59 93.56-93.59V18.562c-100.15 0-181.44 81.289-181.44 181.44h87.88z"
          style={{ color: "#000" }}
          fill="url(#d)"
        />
        <path
          d="M248.68 151.32c-26.87-26.87-70.49-26.87-97.36 0s-26.87 70.49 0 97.36 70.49 26.87 97.36 0 26.87-70.49 0-97.36m-2.14 2.14c25.68 25.69 25.68 67.39 0 93.08-25.69 25.68-67.39 25.68-93.08 0-25.68-25.69-25.68-67.39 0-93.08 25.69-25.68 67.39-25.68 93.08 0"
          style={{ color: "#000" }}
          fill="url(#e)"
        />
        <path
          d="M237.96 162.04c-20.95-20.96-54.97-20.96-75.92 0-20.96 20.95-20.96 54.97 0 75.92 20.95 20.96 54.97 20.96 75.92 0 20.96-20.95 20.96-54.97 0-75.92m-34.29 34.29c2.03 2.03 2.03 5.31 0 7.34s-5.31 2.03-7.34 0-2.03-5.31 0-7.34a5.203 5.203 0 0 1 7.34 0"
          style={{ color: "#000" }}
          fill="url(#f)"
        />
        <path
          opacity=".743"
          d="M243.95 156.05a62 62 0 0 0-24.28-15.01l-1.24 3.72c8.31 2.76 16.12 7.46 22.74 14.07 8.05 8.06 13.25 17.89 15.6 28.24l3.82-.86a61.8 61.8 0 0 0-16.64-30.16m-101.34 34.21-3.89-.67c-3.23 19.18 2.54 39.58 17.33 54.36 14.74 14.75 35.07 20.53 54.2 17.35l-.64-3.87c-17.92 2.98-36.96-2.45-50.78-16.26-13.85-13.86-19.25-32.95-16.22-50.91"
          style={{ color: "#000" }}
          fill="#fff"
        />
      </g>
    </svg>
  );
}
