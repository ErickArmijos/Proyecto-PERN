import { z } from "zod";

export const registerSchema = z.object({
  username_user: z.string({
    required_error: "Username is required",
  }),
  email_user: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password_user: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export const loginSchema = z.object({
  email_user: z.string().email(),
  password_user: z.string().min(5),
});