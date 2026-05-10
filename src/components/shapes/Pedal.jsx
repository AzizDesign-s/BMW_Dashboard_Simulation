// src/components/shapes/Pedal.jsx
import React from "react";

const Pedal = ({ type = "gas", isPressed = false }) => {
  const isBrake = type === "brake";

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Pedal label */}
      <p className="font-pirulen text-xs text-text-secondary tracking-widest uppercase">
        {isBrake ? "Brake" : "Gas"}
      </p>

      {/* Pedal arm + pad */}
      <svg
        width="60"
        height="120"
        viewBox="0 0 60 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: isPressed ? "translateY(6px)" : "translateY(0px)",
          transition: "transform 0.1s ease",
          filter: isPressed
            ? isBrake
              ? "drop-shadow(0 0 8px rgba(214,40,40,0.8))"
              : "drop-shadow(0 0 8px rgba(77,157,224,0.8))"
            : "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
        }}
      >
        {/* Arm */}
        <rect
          x="24"
          y="0"
          width="12"
          height="70"
          rx="4"
          fill={isPressed ? (isBrake ? "#D62828" : "#4D9DE0") : "#1A1A43"}
          stroke={isPressed ? (isBrake ? "#FF4444" : "#7EC8E3") : "#2A2A6A"}
          strokeWidth="1"
        />

        {/* Arm highlight */}
        <rect
          x="27"
          y="4"
          width="4"
          height="60"
          rx="2"
          fill="rgba(255,255,255,0.08)"
        />

        {/* Pedal pad base */}
        <rect
          x="2"
          y="68"
          width="56"
          height="44"
          rx="6"
          fill={isPressed ? (isBrake ? "#D62828" : "#4D9DE0") : "#1A2A4A"}
          stroke={isPressed ? (isBrake ? "#FF6666" : "#7EC8E3") : "#2A3A6A"}
          strokeWidth="1.5"
        />

        {/* Pedal grip lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="8"
            y={75 + i * 6}
            width="44"
            height="2.5"
            rx="1.5"
            fill={
              isPressed
                ? isBrake
                  ? "rgba(255,100,100,0.4)"
                  : "rgba(100,200,255,0.4)"
                : "rgba(255,255,255,0.06)"
            }
          />
        ))}

        {/* Pedal pad top shine */}
        <rect
          x="6"
          y="70"
          width="48"
          height="6"
          rx="3"
          fill="rgba(255,255,255,0.07)"
        />

        {/* Active glow overlay */}
        {isPressed && (
          <rect
            x="2"
            y="68"
            width="56"
            height="44"
            rx="6"
            fill={isBrake ? "rgba(214,40,40,0.15)" : "rgba(77,157,224,0.15)"}
          />
        )}

        {/* Side bolts */}
        <circle
          cx="10"
          cy="90"
          r="3"
          fill="#0A1628"
          stroke="#2A3A6A"
          strokeWidth="1"
        />
        <circle
          cx="50"
          cy="90"
          r="3"
          fill="#0A1628"
          stroke="#2A3A6A"
          strokeWidth="1"
        />
      </svg>

      {/* Press indicator dots */}
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full transition-colors duration-150"
            style={{
              background: isPressed
                ? isBrake
                  ? "#D62828"
                  : "#4D9DE0"
                : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Pedal;
