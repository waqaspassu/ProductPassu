import { z } from "zod";
import { trpc } from "../client";
import { publicProcedure } from "../trpc";

export const signUpSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  name: z.string(),
});

export const arrrr = z.object({
    name:z.string()
})

export type TAuthCredentialsValidator = z.infer<
  typeof signUpSchema
>

export const signUpProcedure = publicProcedure.input(arrrr).mutation(async ({ input }) => {
  console.log("hello")
    // const payload = await getPayloadClient()

    // check if user already exists
    // const { docs: users } = await payload.find({
    //   collection: 'users',
    //   where: {
    //     email: {
    //       equals: email,
    //     },
    //   },


    // await payload.create({
    //   collection: 'users',
    //   data: {
    //     email,
    //     password,
    //     role: 'user',
    //   },
    // })

    return { success: true, sentToEmail: "test" };
})
