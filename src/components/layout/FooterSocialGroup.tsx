import React from "react";
import Link from "next/link";
import { SOCIALLINKS } from "@/constants/footerSocialLinks";

const FooterSocialGroup = () => {
  return (
    <div className="flex gap-[14px]">
      {SOCIALLINKS.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className="flex items-center justify-center w-[40px] h-[40px] text-2xl text-[#CCC] p-2 bg-[#4B4B4B] rounded-full hover:text-white hover:bg-primary transition-colors duration-200"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default FooterSocialGroup;
