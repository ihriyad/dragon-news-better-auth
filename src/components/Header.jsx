import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div
      className="
    text-center
    space-y-2.5
    mt-6
    "
    >
      <Image
        src={logo}
        width={300}
        height={200}
        alt="logo"
        className="mx-auto"
      ></Image>
      <p>Journalism Without Fear or Favour</p>
      <p className="text-md">{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
