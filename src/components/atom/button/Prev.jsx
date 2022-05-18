import React from "react";

function ButtonPrev() {
  return (
    <div>
      <button className="rounded-full  h-10 w-10 bg-transparent text-white flex flex-center">
        <svg
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.2" d="M6 1L2 5L6 9" stroke="white" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}

export default ButtonPrev;
