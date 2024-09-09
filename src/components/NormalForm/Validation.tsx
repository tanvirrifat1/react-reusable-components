import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password is too short" }),
});

export type TNormalForm = z.infer<typeof SignUpSchema>;
