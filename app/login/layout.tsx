"use client";
import Image from "next/image";

const Login_layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <Image src="/kiz.png" alt="Logo" width={180} height={180}></Image>
      <p className="text-center font-extrabold text-sm mb-3">
        Portfolio builder
      </p>
      <div className=" w-fit h-fit p-4 shadow-2xl">{children}</div>
    </div>
  );
};
export default Login_layout;
