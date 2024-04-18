"use client";
import { trpc } from "@/trpc/client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import payload from "payload";
import { useEffect } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { mutate } = trpc.verifyEmail.useMutation({
    onSuccess: () => {
      console.log("verified");
      toast.success("Your account has been verified");
      router.push("/login");
    },
    onError: () => {
      console.log("error");
      toast.error("something issue")
    },
  });
  useEffect(() => {
    if (token) {
    }
    mutate({ token: token ?? "" });
  }, [token]);
  return <h1>Hello This is your verify email page</h1>;
};

export default Page;
