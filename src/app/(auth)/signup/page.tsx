"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as z from "zod";

import { TRPCError } from "@trpc/server";
import Error from "next/error";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema, TSignUpSchema } from "@/validators/signUp/auth";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(SignUpSchema),
  });
  const { mutate , error,isPending} = trpc.signUp.useMutation({
    onSuccess: (data) => {
      toast.success("Please check your email")
    },
    onError: (error) => {
      console.log("my err",error)
      throw new TRPCError({ code: "UNAUTHORIZED" , cause:error});
    },
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = (data, e) => {
    console.log(data, e);
    e?.preventDefault();
    mutate(data);
  };

  console.log({error})

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 ">
        <h2 className="text-2xl text-center font-semibold mb-6 ">SignUp</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error  && error.message && <p className="text-sm font-light text-red-500 text-center">{error.message}</p>}
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <Input id="name" {...register("userName")} />
            {errors?.userName?.message && <p className="text-xs font-light text-red-500">{errors?.userName?.message};</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input id="email" {...register("email")} />
            {errors?.email?.message && <p className="text-xs font-light text-red-500">{errors?.email?.message};</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" {...register("password")} />
            {errors?.password?.message && <p className="text-xs font-light text-red-500">{errors?.password?.message};</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <Input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
            />
            {errors?.confirmPassword?.message && <p className="text-xs font-light text-red-500">{errors?.confirmPassword?.message};</p>}
            {/* {errors[""]?.message && <p className="text-xs font-light text-red-500">Hello</p>} */}
          </div>
          <div className="mb-4">
            <Button className="mb-2" disabled={isPending}>
              SignUp
              {isPending && <Loader2 className="animate-spin"/>}
              </Button>
            <p>
              {" "}
              Already have an account
              <Link href="/auth/login" className="text-blue-600 ml-2">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
