import React from "react";

const HoodTop = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="380"
      height="67"
      viewBox="0 0 380 67"
      fill="none"
      className={`w-full h-auto ${className}`}
    >
      <path
        d="M0 0H380L341.997 50.9234C334.447 61.0407 322.564 67 309.94 67H70.0598C57.4359 67 45.5527 61.0406 38.0025 50.9234L0 0Z"
        fill="url(#hoodGrad)"
      />
      <defs>
        <linearGradient
          id="hoodgrand"
          x1="190"
          y1="-43.5"
          x2="190"
          y2="142.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1A207E" />
          <stop offset="0.606099" stop-color="#050618" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HoodTop;
