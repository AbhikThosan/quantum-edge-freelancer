import React from "react";
import Link from "next/link";
import { SOCIALLINKS } from "@/constants/socialLinks";

const SocialLinksGroup = () => {
  return (
    <div className="flex items-center justify-center gap-[30px]">
      {SOCIALLINKS.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className="flex items-center justify-center w-[120px] h-[60px] text-2xl text-[#CCC] p-2 bg-[#1E1E1E] rounded-full hover:text-white hover:bg-primary transition-colors duration-200"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinksGroup;
