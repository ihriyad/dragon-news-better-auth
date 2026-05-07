'use client'
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSide = () => {

  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data,"from google sign in")
  };
  const githubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });

    console.log(data,"from github sign in")
  };
  return (
    <div className="flex flex-col gap-2 sticky z-10 top-0">
      <button onClick={signIn} className="btn border border-red-400 text-red-400">
        <FaGoogle></FaGoogle>
        Login with google
      </button>
      <button onClick={githubSignIn}  className="btn border text-black">
        <FaGithub></FaGithub>
        Login with Github
      </button>
    </div>
  );
};

export default RightSide;
