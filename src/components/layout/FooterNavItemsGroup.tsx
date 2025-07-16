"use client";
import React from "react";
import Link from "next/link";

interface NavItem {
  navItem: string;
  link: string;
}

interface FooterNavItemsGroupProps {
  title: string;
  items: NavItem[];
}

const FooterNavItemsGroup = ({ title, items }: FooterNavItemsGroupProps) => {
  return (
    <div className="lg:border-r lg:border-[#CCCCCC0F] pt-[43px]">
      <h5 className="font-bold mb-[26px] text-lg capitalize">{title}</h5>
      <ul className="flex flex-col gap-[12px]">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="text-base text-[#CCC] hover:text-[#05af2b] transition-colors duration-200"
            >
              {item.navItem}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavItemsGroup;
