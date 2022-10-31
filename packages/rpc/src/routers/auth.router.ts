import { signInSchema, signUpSchema } from "../schemas/auth.schema"
import { createRouter, procedure } from "../trpc"
export const authRouter = createRouter({
  signIn: procedure
    .input(signInSchema)
    .mutation(() => {

    }),
  signUp: procedure
    .input(signUpSchema)
    .mutation(() => {

    }),
  resetPasswordRequest: procedure
    .mutation(() => {

    }),
  resetPasswordConfirm: procedure
    .mutation(() => {

    })
})