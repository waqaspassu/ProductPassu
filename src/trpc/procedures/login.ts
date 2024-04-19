import { LoginSchema } from "../../validators/signUp/auth";
import { publicProcedure } from "../trpc";
import { getPayloadClient } from "../../get-payload";

export const loginProcedural = publicProcedure
  .input(LoginSchema)
  .mutation(async ({ input }) => {
    const { email, password } = input;
    const payload = await getPayloadClient();

    const result = await payload.login({
      collection: "users",
      data: {
        email,
        password,
      },
    });

    return { success: true, result };
  });
