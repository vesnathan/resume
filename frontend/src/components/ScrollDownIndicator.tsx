import React from "react";

export const ScrollDownIndicator: React.FC = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white animate-bounce"
    >
      <path d="M12 16L8 12H16L12 16Z" fill="currentColor" />
    </svg>
  );
};
