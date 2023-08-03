"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [nameValid, setNameValid] = useState(false);

    const handleChange = () => {
        if (data.name.length <= 0) {
            setNameValid(true);
        } else if (data.name.length >= 0) {
            setNameValid(false);
        }
        if (data.email.length <= 0) {
            setEmailValid(true);
        } else if (data.email.length >= 0) {
            setEmailValid(false);
        }
        if (data.password.length <= 0) {
            setPasswordValid(true);
        } else if (data.password.length >= 0) {
            setPasswordValid(false);
        }
        if (
            data.email.length > 0 &&
            data.password.length > 0 &&
            data.name.length > 0
        ) {
            router.push("/");
        }
    };

    return (
        <div className="flex justify-center items-center m-auto h-screen bg-slate-900">
            <div className="w-6/12 h-96 rounded-3xl justify-center items-center flex-col flex ">
                <h6 className="text-left text-3xl font-bold  text-orange-400 mt-3">
                    Hello blogee!{" "}
                </h6>
                <h6 className="text-left text-2xl font-bold my-4 text-white mt-3">
                    Register to get started
                </h6>
                <input
                    className="p-3 m-3 mt-0 rounded-md w-5/12 text-black"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your name"
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                {nameValid === true ? (
                    <h6 className="text-left text-xs text-red-600 ">please add name </h6>
                ) : (
                    <span></span>
                )}
                <input
                    className="p-3 m-3 mt-0 rounded-md w-5/12 text-black"
                    type="text"
                    name="email"
                    id=""
                    placeholder="Email"
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <div className="justify-start items-start flex ">
                    {emailValid === true ? (
                        <h6 className="text-left text-xs text-red-600">please add email</h6>
                    ) : (
                        <span></span>
                    )}
                </div>
                <input
                    className="p-3 m-3 mt-0 rounded-md w-5/12 text-black"
                    type="text"
                    name=""
                    id=""
                    placeholder="Password"
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                {passwordValid === true ? (
                    <h6 className="text-left text-xs text-red-600 ">
                        please add password
                    </h6>
                ) : (
                    <span></span>
                )}
                <button
                    className="p-3 rounded-md w-5/12 bg-orange-400 mt-5 font-bold"
                    onClick={handleChange}
                >
                    Register
                </button>
                <div className="justify-start items-start flex ">
                    <h6 className="text-left text-sm text-white mt-5">
                        Already have an account?{" "}
                        <span
                            className="font-bold text-orange-400 cursor-pointer"
                            onClick={() => router.push("/login")}
                        >
                            {" "}
                            Login
                        </span>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
