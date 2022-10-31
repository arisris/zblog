import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().min(3),
  password: z.string().min(3)
})

export const signUpSchema = z.object({
  email: z.string().min(3),
  password: z.string().min(3),
  password_confirm: z.string().min(3)
}).superRefine((obj, ctx) => {
  if (obj.password_confirm !== obj.password) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Password confimation incorect"
    })
  }
})