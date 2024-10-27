"use client";
import React, { useState } from "react";
import { InputComponent, DropDownComponent } from "./InputComponent";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { LoginMetadata } from "../utils/types";
import Link from "next/link";

const LoginForm = () => {
  const [loginMetaData, setLoginMetaData] = useState<LoginMetadata>({
    title: "Student Login",
    subTitle: "Enter your Student ID as your username",
    loginType: "student",
  });
  return (
    <div className="flex flex-col justify-between w-[25rem]">
      <div className="flex flex-col items-center w-full">
        <div className="mb-5 w-full flex justify-center items-center flex-col gap-2">
          <h1 className="text-4xl font-bold text-purple-600  ">
            {loginMetaData.title}
          </h1>
          <h3 className="text-sm text-gray-500">{loginMetaData.subTitle}</h3>
        </div>
        <form className="space-y-4 w-full" onSubmit={(e) => e.preventDefault()}>
          <DropDownComponent
            options={[
              { name: "login", value: "student", label: "Student" },
              { name: "login", value: "staff", label: "Staff" },
            ]}
            type="select"
            label="Login as"
            onChange={(e) => {
              if (e.target.value === "student") {
                setLoginMetaData({
                  title: "Student Login",
                  subTitle: "Enter your Student ID as your username",
                  loginType: "student",
                });
              }
              if (e.target.value === "staff") {
                setLoginMetaData({
                  title: "Staff Login",
                  subTitle: "Enter your Staff ID as your username",
                  loginType: "staff",
                });
              }
            }}
          />
          <InputComponent
            Icon={<FaUser />}
            type="text"
            placeholder={
              loginMetaData.loginType === "student"
                ? "e.g 458/14"
                : "e.g MF459/23"
            }
            label="Enter your Student Or Staff ID"
            onChange={() => {}}
          />
          <InputComponent
            Icon={<FaLock />}
            type="password"
            placeholder="e.g ********"
            label="Enter your Password"
            onChange={() => {}}
          />
          <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-md w-full">
            <Link href={"/dashboard"} className="font-bold">
              Get In
            </Link>
          </button>
          <p className="text-sm">
            Having trouble signin in?{" "}
            <Link className="text-purple-500" href={"/"}>
              Contact Admin
            </Link>
          </p>
        </form>
      </div>
      <div className="text-sm text-gray-500 mt-5  gap-2 flex flex-col items-center">
        <p>
          Powered by{" "}
          <Link className="text-purple-500" href={"/"}>
            AllanG Soft
          </Link>
        </p>
        <Link href={"/"} className="text-purple-500">
          © 2024. All rights reserved
        </Link>
        <Link href={"/"} className="text-purple-500">
          Terms of Service
        </Link>
        <Link href={"/"} className="text-purple-500">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
