import React from "react";
import FooterNavItemsGroup from "./FooterNavItemsGroup";
import { NAV_GROUPS } from "@/constants/footerNavItems";
import Link from "next/link";
import Image from "next/image";

const FootersNavigation = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-8 pb-[85px]">
      <Link href="/" className="pt-[43px]">
        <div style={{ position: "relative", width: "221px", height: "58px" }}>
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Link>
      {Object.entries(NAV_GROUPS).map(([title, items]) => (
        <FooterNavItemsGroup key={title} title={title} items={items} />
      ))}
    </div>
  );
};

export default FootersNavigation;
