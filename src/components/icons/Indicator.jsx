import React from "react";

const Indicator = ({
  color = "#121233",
  width = 24,
  height = 14,
  stroke = "#1A1A43",
  direction = "right",
  isActive = false,
}) => {
  if (direction === "right") {
    return (
      <svg
        className={isActive ? "animate-pulse" : ""}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 14"
        fill="none"
      >
        <path
          d="M-1.90735e-06 3.49399V10.506H11.9522V14L24 6.99599L11.9522 0V3.49399H-1.90735e-06Z"
          fill={color}
          stroke={stroke}
          strokeWidth="0.5"
        />
      </svg>
    );
  }
  return (
    <svg
      className={isActive ? "animate-pulse" : ""}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 26 16"
      fill="none"
    >
      <path
        d="M13.293 4.11255H25.2451V11.6243H13.293V15.303L12.917 15.0842L0.869141 8.08032L0.49707 7.8645L0.869141 7.64868L12.917 0.652588L13.293 0.433838V4.11255Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default Indicator;
