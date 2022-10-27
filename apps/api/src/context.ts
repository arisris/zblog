import type { inferAsyncReturnType } from "@trpc/server"

interface InnerContext {
  user?: Record<string, string>
}

export async function createInnerContext() {
  return {}
}

export type Context = inferAsyncReturnType<typeof createInnerContext>