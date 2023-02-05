"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const page = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res.error) {
      setIsLoading(false);
      setError(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-white w-[600px] h-[600px] rounded-lg p-8"
    >
      {isLoading ? (
        <div className=" flex justify-center items-center h-full">
          <Image src="/loading.gif" height={500} width={200} />
        </div>
      ) : (
        <>
          <h1 className=" text-4xl font-bold text-center">Sign in</h1>
          <div className=" flex flex-col mt-4">
            <input
              placeholder="email"
              {...register("email", { required: true })}
              type="email"
              className=" border border-gray-400 rounded-md outline-none p-3 mt-6"
            />
            <input
              placeholder="password"
              {...register("password", { required: true })}
              type="password"
              className=" border border-gray-400 rounded-md outline-none p-3 mt-6"
            />
            <button className=" bg-[#1DA1F2] hover:bg-sky-600 p-4 rounded-3xl text-white font-bold mt-6 ">
              Sign in
            </button>
            <Link href="/register">
              <span className=" text-sky-600 cursor-pointer mt-6 flex justify-center">
                Don't have an account? sign up.
              </span>
            </Link>
            <span className=" mt-5 text-xl text-red-500 flex justify-center">
              {error}
            </span>
          </div>
        </>
      )}
    </form>
  );
};

export default page;
