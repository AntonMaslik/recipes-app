import { z } from "zod";

export const schemeLogin = z.object({
  email: z.string().email("Incorrect email format"),
  password: z.string().min(8),
});
