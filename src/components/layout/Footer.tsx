import React from "react";
import FootersNavigation from "./FooterNavigation";
import FooterSocialGroup from "./FooterSocialGroup";
import FooterPopularPosts from "./FooterPopularPosts";
import FooterCopyright from "./FooterCopyright";
import FooterIntro from "./FooterIntro";

const Footer = () => {
  return (
    <>
      <FooterIntro />
      <FootersNavigation />
      <div className="flex flex-col items-center md:flex-row gap-[20px] justify-between mt-[17px] pb-[34px]">
        <FooterSocialGroup />
        <FooterPopularPosts />
      </div>
      <FooterCopyright />
    </>
  );
};

export default Footer;
