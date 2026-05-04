import React from "react";
import Brand from "./icons/Brand";

const Footer = () => {
  const website = "https://azizdesigns.framer.ai";
  return (
    <div className="w-full px-4 py-2 fixed bottom-0 z-10 flex justify-center items-center bg-blue-header">
      <div className="flex justify-center items-center gap-1">
        <h1 className="font-helvetica text-sm font-normal text-text-secondary">
          Designed By
        </h1>
        <Brand width={20} height={20} />
        <a
          href={website}
          target="_blank" // ✅ opens in new tab
          rel="noopener noreferrer"
          className="text-white font-helvetica text-sm font-normal"
        >
          bdul Aziz
        </a>
      </div>
    </div>
  );
};

export default Footer;
