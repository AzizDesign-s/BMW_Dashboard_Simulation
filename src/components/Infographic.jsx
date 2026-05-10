import React from "react";
import carImage from "../assets/Car.png";

const Infographic = ({ speed = 80 }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center overflow-hidden">
      {/* Speed badge */}
      <div className="relative z-20 w-20 h-20 rounded-full border-2 border-red-500 flex items-center justify-center bg-transparent mt-4">
        <span className="text-white text-3xl font-bold font-pirulen">
          {speed}
        </span>
      </div>

      {/* Infographic container */}
      <div className="relative w-full flex-1 flex justify-center items-start">
        {/* Background SVG shape */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 412 500"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dark blue radial gradient for background */}
            <radialGradient id="bgGrad" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#1B2A4A" />
              <stop offset="100%" stopColor="#050A1A" />
            </radialGradient>

            {/* Blue beam gradient */}
            <linearGradient
              id="blueBeam"
              x1="206"
              y1="200"
              x2="206"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#4D9DE0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1B2A4A" stopOpacity="0.2" />
            </linearGradient>

            {/* Red line gradient - fades out */}
            <linearGradient id="redLineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D62828" stopOpacity="0" />
              <stop offset="40%" stopColor="#D62828" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#D62828" stopOpacity="0.1" />
            </linearGradient>

            {/* Blue line gradient */}
            <linearGradient id="blueLineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4D9DE0" stopOpacity="0" />
              <stop offset="40%" stopColor="#4D9DE0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4D9DE0" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Background fill */}
          <rect width="412" height="500" fill="url(#bgGrad)" />

          {/* ---- RED perspective lines (left side) ---- */}
          {/* All lines originate from car center point (206, 220) and fan left */}
          {[
            { x2: -20, opacity: 0.3 },
            { x2: 20, opacity: 0.4 },
            { x2: 60, opacity: 0.5 },
            { x2: 100, opacity: 0.6 },
            { x2: 140, opacity: 0.7 },
            { x2: 175, opacity: 0.5 },
          ].map((line, i) => (
            <line
              key={`red-${i}`}
              x1="206"
              y1="230" // origin point (car center)
              x2={line.x2}
              y2="500" // fans to bottom left
              stroke="#D62828"
              strokeWidth="1"
              strokeOpacity={line.opacity}
            />
          ))}

          {/* ---- BLUE perspective lines (right side) ---- */}
          {[
            { x2: 420, opacity: 0.3 },
            { x2: 390, opacity: 0.4 },
            { x2: 355, opacity: 0.5 },
            { x2: 310, opacity: 0.6 },
            { x2: 265, opacity: 0.7 },
            { x2: 235, opacity: 0.5 },
          ].map((line, i) => (
            <line
              key={`blue-${i}`}
              x1="206"
              y1="230"
              x2={line.x2}
              y2="500"
              stroke="#4D9DE0"
              strokeWidth="1"
              strokeOpacity={line.opacity}
            />
          ))}

          {/* ---- Blue center beam (headlight) ---- */}
          <path
            d="M 185 230 L 130 500 L 282 500 Z" // triangle from car to bottom
            fill="url(#blueBeam)"
            opacity="0.6"
          />

          {/* Soft glow under car */}
          <ellipse
            cx="206"
            cy="240"
            rx="80"
            ry="20"
            fill="#4D9DE0"
            opacity="0.08"
          />
        </svg>

        {/* Car image - sits on top of SVG */}
        <img
          src={carImage}
          alt="BMW"
          className="relative z-10 w-72 mt-8 object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Infographic;
