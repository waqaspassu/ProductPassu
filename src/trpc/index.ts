
import { publicProcedure, router } from "./trpc";
import { signUpProcedure, signUpSchema } from "./procedures/signup";

export const appRouter = router({
  signUp: signUpProcedure
});

export type AppRouter = typeof appRouter;
