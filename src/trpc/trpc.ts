import { initTRPC } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";



const t = initTRPC.context().create()



export const router = t.router;

export const publicProcedure = t.procedure;
