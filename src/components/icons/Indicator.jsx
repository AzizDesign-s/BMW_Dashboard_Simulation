import React from "react";

const Indicator = ({
  color = "#28BA28",
  className = {},
  width = 24,
  height = 14,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 14"
      fill="none"
      className={className}
    >
      <path
        d="M-1.90735e-06 3.49399V10.506H11.9522V14L24 6.99599L11.9522 0V3.49399H-1.90735e-06Z"
        fill="#28BA28"
      />
    </svg>
  );
};

export default Indicator;
