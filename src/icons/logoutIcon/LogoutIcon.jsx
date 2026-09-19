import React from "react";

const LogoutIcon = ({ width, height, color }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12H9m0 0 3-3m-3 3 3 3"
        />
      </svg>{" "}
    </>
  );
};

export default LogoutIcon;
