import React from "react";

const Weather = ({ color = "#FFFFFF", width = 19, height = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 16"
      fill="none"
    >
      <path
        d="M9.24617 3.50633C8.63021 1.75524 6.96169 0.5 5 0.5C2.51472 0.5 0.5 2.51472 0.5 5C0.5 6.41825 1.1561 7.68326 2.18133 8.50807M2.18133 8.50807C1.14991 9.2408 0.5 10.3097 0.5 11.5C0.5 13.7091 2.73858 15.5 5.5 15.5H9.5H13.5C16.2614 15.5 18.5 13.7091 18.5 11.5C18.5 9.54032 16.7385 7.90979 14.413 7.56653C13.9758 5.25123 11.9424 3.5 9.5 3.5C9.41488 3.5 9.33025 3.50213 9.24617 3.50633C6.9178 3.62275 5.00897 5.33192 4.58698 7.56653C3.67403 7.7013 2.84799 8.03447 2.18133 8.50807Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Weather;
