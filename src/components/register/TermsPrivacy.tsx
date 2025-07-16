import Link from "next/link";
import React from "react";

const TermsPrivacy = () => {
  return (
    <p className="text-[#888] text-sm font-semibold text-center mt-[49px]">
      By joining, you agree to the Fiverr{" "}
      <Link href="/terms" className="text-primary underline">
        Terms of Service
      </Link>{" "}
      and to occasionally receive emails from us. Please read our{" "}
      <Link href="/policy" className="text-primary underline">
        Privacy Policy
      </Link>{" "}
      to learn how we use your personal data.
    </p>
  );
};

export default TermsPrivacy;
