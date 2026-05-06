import React from "react";

const Rpm = () => {
  return (
    <div className="inline-flex  h-40 w-fit items-end gap-2">
      <p className="-rotate-90 w-2  text-text-secondary text-xs font-normal font-pirulen">
        RPM
      </p>
      <div className="w-fit h-full  flex flex-col justify-between items-center">
        <p className="font-helvetica text-redd-primary text-base font-normal">
          8
        </p>
        <p className="font-helvetica text-text-primary text-base font-normal">
          4
        </p>
        <p className="font-helvetica text-text-secondary text-base font-normal">
          0
        </p>
      </div>
      <div className="w-4 h-full bg-rpm-gradient rounded-[40px_40px_0_0]" />
    </div>
  );
};

export default Rpm;
