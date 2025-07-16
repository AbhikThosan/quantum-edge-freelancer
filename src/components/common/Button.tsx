"use client";
import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-primary font-semibold px-[21px] py-[10px] rounded-full text-sm"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
