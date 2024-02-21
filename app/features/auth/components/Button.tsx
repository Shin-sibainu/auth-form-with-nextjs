import React, { ReactNode } from "react";

interface ButtonProps {
  colorClass: string;
  children: ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ children, colorClass, type, onClick }: ButtonProps) => {
  const baseClasses =
    "text-white font-bold py-2 px-4 rounded focus:outline-none";

  return (
    <button
      type={type}
      className={`${baseClasses} ${colorClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
