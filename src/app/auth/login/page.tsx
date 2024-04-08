import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form action="">
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <Input type="password" />
          </div>
          <div className="mb-4">
            <Button className="mb-2" type="submit">
              Login
            </Button>
            <p className="mb-1">
              Do you have no account? Signup here{" "}
              <Link className="text-blue-600" href="/auth/signup">
                Signup
              </Link>
            </p>
            <p>
              ForgetPassword{" "}
              <Link className="text-blue-600" href="/forgetpassword">Forget Password</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
