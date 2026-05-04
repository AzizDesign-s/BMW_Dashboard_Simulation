import React from "react";

const OilIndicator = ({
  width = 22,
  height = 9,
  color = "#F41717", // default red — override via prop
  className = "",
  style = {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 9"
      fill="none"
      className={className}
      style={style}
    >
      <path d="M0 4.56691L3.91863 6.05481V1.25502L0 0V4.56691Z" fill={color} />
      <path
        d="M3.91865 8.80781L14.1577 8.8078L20.8544 2.1123L20.1043 1.03222L13.7247 3.75215L11.8352 2.42193V3.63289L13.8115 5.03141L17.9138 3.33114L13.633 7.59684H5.12962V3.63289L11.8352 3.63289V2.42193H8.94754V1.49293H10.5109V0.280707H6.16934V1.49293H7.73531V2.42193H5.12962V1.77994L3.91863 1.25502L3.91865 8.80781Z"
        fill={color}
      />
      <path
        d="M20.6204 7.79824C21.3819 7.79824 22 7.18018 22 6.4186C22 5.65703 20.6204 3.78645 20.6204 3.78645C20.6204 3.78645 19.2407 5.65703 19.2407 6.4186C19.2407 7.18018 19.8588 7.79824 20.6204 7.79824Z"
        fill={color}
      />
    </svg>
  );
};

export default OilIndicator;
