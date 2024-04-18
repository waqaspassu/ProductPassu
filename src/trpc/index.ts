
import { publicProcedure, router } from "./trpc";
import { signUpProcedure, signUpSchema } from "./procedures/signup";
import { verifyEmailProcedure } from "./procedures/verifyEmail";

export const appRouter = router({
  signUp: signUpProcedure,
  verifyEmail:verifyEmailProcedure
});

export type AppRouter = typeof appRouter;
