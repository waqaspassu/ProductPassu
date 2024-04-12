import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";



const app = express();

const PORT = process.env.NEXT_PUBLIC_SERVER_URL || 3000;

const createContext = async (): Promise<any> => {
  // Create and return the TRPC context here
  // For example:
  const context: any = {
      // Define the properties and their values here
      // For example:
      req: {}, // Fill in with actual request object
      res: {}, // Fill in with actual response object
  };

  return context;
};


app.use('api/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext
}))

app.use((req, res) => nextHandler(req, res));

async function start() {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`admin ${cms.getAdminURL()}`);
      },
    },
  });


  nextApp.prepare().then((res) => {
    // payload.logger.info('Next.js started')

    app.listen(3000, async () => {
      // payload.logger.info(
      //   `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      // )
    });
  });
};

start();
