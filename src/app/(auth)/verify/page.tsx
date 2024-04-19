"use client";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { BadgeCheck, LoaderCircle, LoaderIcon, Mail, Verified } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import payload from "payload";
import { useEffect } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { mutate, data} = trpc.verifyEmail.useMutation({
    onSuccess: () => {
      console.log("verified");
      toast.success("Your account has been verified");
      // router.push("/login");
    },
    onError: () => {
      console.log("error");
      toast.error("something issue");
    },
  });
  useEffect(() => {
    if (token) {
    }
    mutate({ token: token ?? "" });
  }, [token]);

  console.log("data", data);
  if(false){
    return(
      <div className="flex flex-col justify-center items-center  " style={{ minHeight: 'calc(100vh - 140px)' }}>
        please wait...
      <LoaderCircle size={33} className="animate-spin"/>

      </div>
    )
  }
  return (
    <div>
      {data?.verified ? (
        <div className="flex flex-col justify-center items-center  " style={{ minHeight: 'calc(100vh - 140px)' }}>
          <BadgeCheck className="mb-1"  color="#2de64c"/>
          <h2 className="mb-4">Your account has been verified</h2>
          <Button variant="secondary" onClick={() => router.push("/login")}>Login</Button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center  " style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Mail className="mb-1" />
        <h2 className="mb-4">We have sent you an email Please check your Email</h2>
      </div>
      )}
    </div>
  );
};

export default Page;
