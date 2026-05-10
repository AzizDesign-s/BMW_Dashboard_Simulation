import React from "react";

const SBtn = ({ label, onClick, isActive = false, disabled, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-9 h-9 flex justify-center items-center rounded-lg transition-colors  ${isActive ? "bg-rb-active" : "bg-rb-non-active "} text-white text-center text-xl font-normal font-pirulen uppercase`}
    >
      {icon ? icon : label}
    </button>
  );
};

export default SBtn;
