"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setLoading(false);
        if (!res.ok) {
          throw res;
        }
        router.push("/login");
        return res.json();
      })
      .catch((err) => {
        err.json().then((body) => {
          setError(body);
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-white w-[600px] h-[650px] rounded-lg p-8"
    >
      {loading ? (
        <div className=" flex justify-center items-center h-full">
          <Image src="/loading.gif" height={500} width={200} />
        </div>
      ) : (
        <>
          <h1 className=" text-4xl font-bold text-center">
            Create your account
          </h1>
          <div className=" flex flex-col mt-4">
            <input
              placeholder="name"
              type="text"
              className=" border border-gray-400 rounded-md outline-none p-3 mt-6"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p className=" text-red-500 font-bold" role="alert">
                Name is required!
              </p>
            )}

            <input
              placeholder="email"
              type="email"
              className=" border border-gray-400 rounded-md outline-none p-3 mt-6"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p className=" text-red-500 font-bold" role="alert">
                Email is required!
              </p>
            )}
            <input
              placeholder="username"
              type="text"
              className=" border border-gray-400 rounded-md outline-none p-3 mt-6"
              {...register("username", { required: true })}
              aria-invalid={errors.username ? "true" : "false"}
            />
            {errors.username?.type === "required" && (
              <p className=" text-red-500 font-bold" role="alert">
                Username is required!
              </p>
            )}
            <input
              placeholder="password"
              type="password"
              className=" border border-gray-400 rounded-md outline-none p-3 mt-6"
              {...register("password", { required: true })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === "required" && (
              <p className=" text-red-500 font-bold" role="alert">
                Password is required!
              </p>
            )}
            <button className=" bg-[#1DA1F2] hover:bg-sky-600 p-4 rounded-3xl text-white font-bold mt-6 ">
              Register
            </button>
            <Link href="/signin">
              <span className=" text-sky-600 cursor-pointer mt-6 flex justify-center">
                Already have an account? sign in.
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
