import React from "react";
import OptionBadge from "../option/Badge";

function ButtonOption() {
  return (
    <div className="flex justify-evenly">
      <div className="btn w-80 h-60 bg-base-100 shadow-xl">
        <div className="flex-center relative">
          <article className="text-option-survey normal-case">
            Luar Sepihak
          </article>
          <OptionBadge textBadge="A" className="absolute right-0 top-0" />
        </div>
      </div>
      <div className="btn w-80 h-60 bg-base-100 shadow-xl">
        <div className="flex-center relative">
          <article className="text-option-survey normal-case">
            Luar Sepihak
          </article>
          <OptionBadge textBadge="B" className="absolute right-0 top-0" />
        </div>
      </div>
      <div className="btn w-80 h-60 bg-base-100 shadow-xl">
        <div className="flex-center relative">
          <article className="text-option-survey normal-case">
            Luar Sepihak
          </article>
          <OptionBadge textBadge="C" className="absolute right-0 top-0" />
        </div>
      </div>
      <div className="btn w-80 h-60 bg-base-100 shadow-xl">
        <div className="flex-center relative">
          <article className="text-option-survey normal-case">
            Luar Sepihak
          </article>
          <OptionBadge textBadge="D" className="absolute right-0 top-0" />
        </div>
      </div>
    </div>
  );
}

export default ButtonOption;
