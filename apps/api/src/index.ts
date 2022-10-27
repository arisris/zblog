import { createInnerContext } from "./context"
import { createRouter, procedure } from "./trpc"
import { authRouter } from "./routers/auth.router"

export { createInnerContext }

export const app = createRouter({
  "": procedure.query(() => `Hi You are here`),
  auth: authRouter
})

export type App = typeof app

export async function createAppCaller() {
  const context = await createInnerContext()
  return app.createCaller(context)
}