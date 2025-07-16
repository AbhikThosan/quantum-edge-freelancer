"use client";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="bg-[#ffffff1a] rounded-lg pl-[10px] pr-[30px] md:pr-[40px] lg:pr-[60px] xl:pr-[100px] 2xl:pr-[180px] py-[4px] relative"
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[6px] bg-[#88888838] rounded-md px-[14px] py-[9px] w-full text-sm font-semibold text-white"
      >
        Freelancer
        <FaCaretDown />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-[#88888838] rounded-md w-full z-10">
          <ul className="py-1">
            <li className="px-[14px] py-[9px] text-sm font-semibold text-white hover:bg-[#ffffff1a] rounded-md">
              Option 1
            </li>
            <li className="px-[14px] py-[9px] text-sm font-semibold text-white hover:bg-[#ffffff1a] rounded-md">
              Option 2
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
