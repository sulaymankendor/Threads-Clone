import { z } from "zod";

export const signInUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createUserAccountSchema = z
  .object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
