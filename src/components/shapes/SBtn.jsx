import React from "react";

const SBtn = ({ label, onClick, isActive = false }) => {
  return (
    <button
      onClick={onClick}
      className={`w-9 h-9 flex justify-center items-center rounded-lg transition-colors  ${isActive ? "bg-rb-active" : "bg-rb-non-active "} text-white text-center text-xl font-normal font-pirulen uppercase`}
    >
      {label}
    </button>
  );
};

export default SBtn;
