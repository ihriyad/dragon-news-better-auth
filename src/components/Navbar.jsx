import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import user from "@/assets/user.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="container mx-auto flex mt-6 justify-between items-center gap-3">
      <div className="text-2xl font-extralight">Dragon News</div>
      <ul className="flex gap-4 items-center text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/contact"}>Contact</NavLink>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-3">
        <Image src={user} alt="user" height={50} width={40}></Image>
        <Link href={'/login'}><button className="btn bg-red-400 text-white">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
