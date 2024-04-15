"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/trpc/client";
import { TAuthCredentialsValidator } from "@/trpc/procedures/signup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";


type SignUpInputs = {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
};
const Signup = () => {
  const { handleSubmit, register } = useForm<SignUpInputs>();
  const {mutate} = trpc.signUp.useMutation({
    onSuccess: (data) => {
      console.log("hello",data)
    },
    onError: (error) => {
      console.log('test',error)
    }
    
    
  });



  const onSubmit:SubmitHandler<TAuthCredentialsValidator> =  (data,e) => {
    console.log(data,e)
    e?.preventDefault()
     mutate(data)
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 ">
        <h2 className="text-2xl text-center font-semibold mb-6 ">SignUp</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <Input id="name" {...register("userName")}/>
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input id="email" {...register('email')} />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" {...register("password")} />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
          </div>
          <div className="mb-4">
            <Button className="mb-2" >
              SignUp
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
