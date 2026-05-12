import React from "react";

const HoodBottom = ({ className = "", height = 380, width = 67 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 380 80"
      fill="none"
      className={className}
    >
      <path
        d="M380 67H0L38.0025 16.0766C45.5527 5.95934 57.4359 0 70.0598 0H309.94C322.564 0 334.447 5.95935 341.997 16.0766L380 67Z"
        fill="url(#paint0_linear_234_58)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_234_58"
          x1="190"
          y1="110.5"
          x2="190"
          y2="-75.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.248488" stop-color="#050618" />
          <stop offset="1" stop-color="#1A207E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HoodBottom;
