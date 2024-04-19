
import { publicProcedure, router } from "./trpc";
import { signUpProcedure } from "./procedures/signup";
import { verifyEmailProcedure } from "./procedures/verifyEmail";
import { loginProcedural } from "./procedures/login";

export const appRouter = router({
  signUp: signUpProcedure,
  verifyEmail:verifyEmailProcedure,
  login: loginProcedural
});

export type AppRouter = typeof appRouter;
