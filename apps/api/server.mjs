// @ts-nocheck
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { app, createInnerContext } from "./dist/index.mjs";

const { server, listen } = createHTTPServer({
  router: app,
  createContext: () => createInnerContext(),
});
const { port } = listen(3100);
server.on("listening", () => {
  console.log(`TRPC Server is now listen at port: ${port}`);
});
