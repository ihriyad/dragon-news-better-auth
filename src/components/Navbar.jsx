"use client";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import avatar from "@/assets/user.png";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session ,isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  // console.log(user.image, "navphoto");

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
      <div className="flex justify-center items-center gap-3 ">
        {isPending?<>Loading...</>:user ? (
          <>
            <h2>Welcome,{user.name}</h2>
            <Image className="rounded-full" src={user.image || avatar} alt="user" height={20} width={30}></Image>

            <button onClick={async() =>await authClient.signOut()} className="btn btn-primary">
              Logout
            </button>
          </>
        ) : (
          <Link href={"/login"}>
            <button className="btn btn-active">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
