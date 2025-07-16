import bannner from "../../../../public/images/banner/banner.png";
import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import RegistrationForm from "@/components/register/RegistrationForm";

const Register = () => {
  return (
    <div className="flex items-center justify-center mt-[197px] mb-[156px]">
      <div className="inline-block">
        <div className="flex items-center p-[40px] justify-center gap-[10px] xl:gap-[70px] bg-secondary rounded-[28px]">
          <RegistrationForm />
          <div className="relative hidden lg:block">
            <Image src={bannner} alt="banner" objectFit="cover" />
            <button className="absolute flex items-center justify-center top-3 right-3 w-[33px] h-[33px] rounded-full border border-[#D9D9D9] bg-black">
              <RxCross2 className="text-primary text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
