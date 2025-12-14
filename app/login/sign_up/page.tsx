"use client";
import { useState } from "react";
import Link from "next/link";

const Sign_up = () => {
  const [email, set_email] = useState("");
  const [password, set_passwword] = useState("");

  const input_style =
    "px-3 py-2 border my-5 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black";

  return (
    <form>
      <label htmlFor="email">Email</label> <br />
      <input
        type="textarea"
        name="email"
        id="email"
        value={email}
        onChange={(e) => set_email(e.target.value)}
        className={input_style}
      ></input>{" "}
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="textarea"
        name="password"
        id="password"
        value={password}
        onChange={(e) => set_passwword(e.target.value)}
        className={input_style}
      ></input>
      <br />
      <p className="text-sm">
        <Link href="/login" className=" text-blue-500 active:text-blue-700">
          {" "}
          Back to login page
        </Link>
      </p>
      <button className=" flex flex-row gap-4 items-center w-full h-[35px] bg-gray-200 border border-black shadow-lg my-5 p-3">
        <p>Continue with</p> <img src="/google.png" className="w-15 h-15" />
      </button>
      <br />
      <button
        type="submit"
        className="text-white w-full h-[35px] bg-black text-center"
      >
        Sign up
      </button>
    </form>
  );
};
export default Sign_up;
