import React from "react";
import useSpeedSweep from "./hooks/useSpeedSweep";

const RADIUS = 90;
const CX = 113;
const CY = 113;
const START_ANGLE = 135;
const END_ANGLE = 405;
const MAX_SPEED = 220;

function polarToXY(angle, radius) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

function arcPath(startAngle, endAngle, radius) {
  const start = polarToXY(startAngle, radius);
  const end = polarToXY(endAngle, radius);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

const SpeedInfo = ({ speed = 0, isEngineOn = false }) => {
  const { displaySpeed, isSweeping } = useSpeedSweep(isEngineOn, speed); // 👈 one line

  const SWEEP = END_ANGLE - START_ANGLE;
  const progress = Math.min(displaySpeed / MAX_SPEED, 1);
  const midAngle = START_ANGLE + SWEEP * 0.5;
  const needleAngle = START_ANGLE + progress * SWEEP;
  const blueEnd = Math.min(needleAngle, midAngle);
  const showRed = needleAngle > midAngle;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width="226"
        height="226"
        viewBox="0 0 226 226"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background track */}
        <path
          d={arcPath(START_ANGLE, END_ANGLE, RADIUS)}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Tick marks */}
        {Array.from({ length: 27 }, (_, i) => {
          const angle = START_ANGLE + (i / 26) * SWEEP;
          const isMajor = i % 2 === 0;
          const innerR = RADIUS - (isMajor ? 14 : 9);
          const outerR = RADIUS - 2;
          const inner = polarToXY(angle, innerR);
          const outer = polarToXY(angle, outerR);
          return (
            <line
              key={i}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke={
                isMajor ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)"
              }
              strokeWidth={isMajor ? 1.5 : 0.8}
            />
          );
        })}

        {/* Blue arc */}
        {progress > 0 && (
          <path
            d={arcPath(START_ANGLE, blueEnd, RADIUS)}
            stroke="#4D9DE0"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            style={{ filter: "drop-shadow(0 0 4px #4D9DE0)" }}
          />
        )}

        {/* Red arc */}
        {showRed && (
          <path
            d={arcPath(midAngle, needleAngle, RADIUS)}
            stroke="#D62828"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            style={{ filter: "drop-shadow(0 0 4px #D62828)" }}
          />
        )}

        {/* Center circle */}
        <circle
          cx={CX}
          cy={CY}
          r={72}
          fill="#080E20"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />

        {/* Speed number */}
        <text
          x={CX}
          y={CY - 8}
          textAnchor="middle"
          fill="white"
          fontSize="42"
          fontWeight="700"
          fontFamily="Pirulen, monospace"
        >
          {displaySpeed}
        </text>

        {/* Km/h */}
        <text
          x={CX}
          y={CY + 20}
          textAnchor="middle"
          fill="rgba(138,155,196,0.9)"
          fontSize="13"
          fontFamily="Helvetica, sans-serif"
          letterSpacing="2"
        >
          Km/h
        </text>
      </svg>
    </div>
  );
};

export default SpeedInfo;
