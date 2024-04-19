"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/trpc/client";
import { TLoginSchema } from "./../../../validators/signUp/auth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

export default function Login() {
  const { register, handleSubmit } = useForm<TLoginSchema>();

  const {mutate,data, isPending, error} = trpc.login.useMutation({
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });

  const onSubmit = (data: TLoginSchema) => {
    console.log({ data });
    mutate(data)
  };
  console.log('login',{data}, isPending, error)
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {
          error && error.message && <p className="text-red-500 text-sm">{error.message}</p>
        }
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input {...register("email")} />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <Input type="password" {...register("password")} />
          </div>
          <div className="mb-4">
            <Button className="mb-2" type="submit" disabled={isPending}>
              Login
              {isPending && <Loader2 className="animate-spin ml-2" />}

            </Button>
            <p className="mb-1">
              Do you have no account? Signup here{" "}
              <Link className="text-blue-600" href="/auth/signup">
                Signup
              </Link>
            </p>
            <p>
              ForgetPassword{" "}
              <Link className="text-blue-600" href="/forgetpassword">
                Forget Password
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
