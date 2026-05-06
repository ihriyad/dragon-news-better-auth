"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const ResisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, password, photo } = data;
    console.log(name, photo);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SignUp success");
      redirect("/")
    }
  };
  return (
    <div className="container bg-slate-100 rounded-md mx-auto flex items-center justify-center my-10 w-3xl">
      <div className="p-8 space-y-2 w-2xl">
        <h1 className="text-center text-xl font-bold">Create Your Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              {...register("name", { required: "Name field is required" })}
              type="text"
              className="input w-full"
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input w-full"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Your Photo URL"
              {...register("photo", { required: "Photo field is required" })}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input w-full"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button className="btn w-1/2 mx-auto mt-2 bg-slate-800 text-white">
              Resister
            </button>
          </fieldset>
          <div className="text-center">
            <p>Already have an account?</p>
            <p>
              <Link href={"/login"} className="font-bold text-blue-600">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResisterPage;
