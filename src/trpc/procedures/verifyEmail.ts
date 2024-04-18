import { z } from "zod";
import { publicProcedure } from "../trpc";
import { getPayloadClient } from "./../../get-payload";

const veriefyEmailSchema = z.object({
  token: z.string(),
});

export const verifyEmailProcedure = publicProcedure
  .input(veriefyEmailSchema)
  .mutation(async ({ input }) => {
    const { token } = input;

    const payload = await getPayloadClient();

    const result = payload.verifyEmail({
      collection: "users",
      token,
    });

    console.log({ result });

    return { sucess: true, verified: true };
  });
