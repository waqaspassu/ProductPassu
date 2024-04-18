import { z } from "zod";
import { trpc } from "../client";
import { publicProcedure } from "../trpc";
import { getPayloadClient } from "./../../get-payload";
import { TRPCError } from "@trpc/server";
import { TRPCClientError } from "@trpc/client";

const UserRole = z.enum(["admin", "user"]);

export const signUpSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  userName: z.string(),
  // role: UserRole
});

export type TAuthCredentialsValidator = z.infer<typeof signUpSchema>;

export const signUpProcedure = publicProcedure
  .input(signUpSchema)
  .mutation(async ({ input }) => {
    console.log("hello in the success page is", input);
    const { email, password, userName } = input;

    const payload = await getPayloadClient();

    const { docs: user } = await payload.find({
      collection: "users",
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (user.length > 0) {
      throw new TRPCError({ code: "CONFLICT" });
    }

    await payload.create({
      collection: "users",
      data: {
        email: email,
        password: password,
        userName: userName,
        role: "user",
      },
    });
    return { success: true, sentToEmail: email };
  });
