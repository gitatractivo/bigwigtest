import React, { useState } from 'react'
import SideImg from "../assets/Login.png";
import logo from "../assets/Logo.png";
import { Button, Input, Modal, ModalContent } from "@nextui-org/react";

type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex  gap-2 ">
      <div className="w-1/2 h-screen relative  flex items-center justify-">
        <img
          src={SideImg}
          alt="sideImg"
          className="w-full h-full drop-shadow-lg"
        />
        <div className="flex absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 items-center gap-4 cursor-pointer">
          <img src={logo} alt="" />
          <span className="text-white  font-outfit text-3xl font-semibold">
            BigWigMedia.ai
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 h-screen">
        <div className="w-2/3 h-fit rounded-xl p-4 flex flex-col items-center justify-center shadow-medium gap-4">
          <h1 className="text-2xl font-semibold text-left ">Sign in</h1>
          <Input
            type="email"
            label="Email"
            value={email}
            onValueChange={setEmail}
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onValueChange={setPassword}
          />
          {/* <div
            className="flex text-xs text-gray-600 hover:text-gray-400 cursor-pointer  self-end flex-start justify-start"
            onClick={() => {
              navigate("/forgot");
            }}
          >
            Forgot Password?
          </div> */}
          <Button
            /* @ts-ignore */
            auto
            shadow
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            // onPress={handleSubmit}
          >
            Sign In
          </Button>
          <div className="w-full relative border-b my-4">
            <h1 className="absolute px-4 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-gray-400">
              OR
            </h1>
          </div>

          {/* <Googleauth /> */}

          <div
            className="flex text-lg text-gray-600 hover:text-slate-500 cursor-pointer   flex-start justify-start"
            // onClick={() => {
            //   navigat("/register");
            // }}
          >
            Create Account?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login