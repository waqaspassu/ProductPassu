'use client';

import { z } from "zod";

import { trpc } from "../client";
import { publicProcedure } from "../trpc";
import { getPayloadClient } from "./../../get-payload";
import { TRPCError } from "@trpc/server";
import { TRPCClientError } from "@trpc/client";
import { SignUpSchema } from "./../../validators/signUp/auth";

export const signUpProcedure = publicProcedure
  .input(SignUpSchema)
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
      throw new TRPCError({ code: "CONFLICT", message:"User with this email already exists" });
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
