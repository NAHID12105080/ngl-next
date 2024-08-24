import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be at least 2 characters long")
  .max(20, "username must be at most 20 characters long")
  .regex(
    /^[a-zA-Z0-9_]*$/,
    "username must contain only letters, numbers, and underscores"
  );

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, "password must be at least 6 characters long"),
});
