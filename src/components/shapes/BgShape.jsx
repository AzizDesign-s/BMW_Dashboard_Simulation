import React from "react";

const BgShape = ({ color = "#04061A", height = 412, width = 473 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      viewBox="0 0 412 473"
      fill="none"
    >
      <path
        d="M0 21.3225L15.3855 18.335C141.286 -6.11169 270.714 -6.11169 396.615 18.335L412 21.3225V472.323H0V21.3225Z"
        fill={color}
      />
    </svg>
  );
};

export default BgShape;
