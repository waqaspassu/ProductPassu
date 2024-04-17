import { z } from "zod";
import { trpc } from "../client";
import { publicProcedure } from "../trpc";
import { getPayloadClient } from "./../../get-payload";
import payload from "payload";
import { TRPCError } from "@trpc/server";

const UserRole = z.enum(["admin","user"])

export const signUpSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  userName: z.string(),
  role: UserRole
});

export type TAuthCredentialsValidator = z.infer<typeof signUpSchema>;

export const signUpProcedure = publicProcedure
  .input(signUpSchema)
  .mutation(async ({ input }) => {
    console.log("hello in the success page is", input);
    const { email, userName, password, role } = input;
    const payload = await getPayloadClient();
    const { docs: existingUsers } = await payload.find({
      collection: "users",
      where: {
        email: {
          equals: email,
        },
      },
    });
    if (existingUsers.length>0) {
      throw new TRPCError({code:"CONFLICT"});
    }
     

    await payload.create({
      collection: "users",
      data: {
        email,
        userName,
        password,
        role
      },
    })

  

    return { success: true, sentToEmail: "test" };
  });


