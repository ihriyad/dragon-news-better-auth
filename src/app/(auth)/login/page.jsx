"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
    });
    console.log(res, error);
    if (res) {
      alert("login success");
    }
    if (error) {
      alert(error.message);
    }
  };
  return (
    <div className="container bg-slate-100 rounded-md mx-auto flex items-center justify-center my-10 w-3xl">
      <div className="p-8 space-y-2">
        <h1 className="text-center text-xl font-bold">Login to your account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button className="btn w-full mt-2 bg-slate-800 text-white">
              Login
            </button>
          </fieldset>
          <div className="text-center">
            <p>Do not have an account?</p>
            <p>
              <Link href={"/resister"} className="font-bold text-blue-600">
                Resister
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
