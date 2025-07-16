import Link from "next/link";
import React from "react";

const FooterIntro = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[40px] 2xl:gap-[220px] items-center justify-between pt-[42px] pb-[46px] border-b border-[#CCCCCC0F]">
      <h4 className="text-[32px] font-bold">
        Reach Your Requirement Goals Right on Schedule
      </h4>
      <div>
        <p className="text-[16px] text-[#CCC] pb-[24px]">
          Sign up, complete your profile, and start browsing projects. Submit
          proposals and communicate with clients to get hired.
        </p>
        <Link
          href="/registration"
          className="bg-primary font-semibold px-[21px] py-[10px] rounded-full text-sm"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default FooterIntro;
