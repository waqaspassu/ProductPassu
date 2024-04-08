import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white rounded shadow-md sm:w-96 p-8">
        <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Forget Password</h2>
        <p >We will send email to your gmail so you can reset your password</p>    
        </div>
        
        <form action="">
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input id="email" />
          </div>
          <div className="">
            <Button>Reset Password</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
