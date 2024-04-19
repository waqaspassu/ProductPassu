import { z } from "zod";

export const SignUpSchema = z
  .object({
    userName: z.string().min(4),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
  })
  .required()
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path:["confirmPassword"],
        message: "This password did not match",
      });
    }
  });

export type TSignUpSchema = z.infer<typeof SignUpSchema>;



export const LoginSchema = z.object({
    email:z.string(),
    password: z.string()
})

export type TLoginSchema = z.infer<typeof LoginSchema>
