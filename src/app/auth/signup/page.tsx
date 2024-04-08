import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 ">
        <h2 className="text-2xl text-center font-semibold mb-6 ">SignUp</h2>
        <form action="">
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <Input id="name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input id="email" />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <Input id="confirmpassword" type="password" />
          </div>
          <div className="mb-4">
            <Button className="mb-2" type="submit">SignUp</Button>
						<p> Already have an account<Link href="/auth/login" className="text-blue-600 ml-2">Login</Link></p>
						
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
