import { z } from "zod";

export const schemeRegister = z.object({
  name: z.string().min(4),
  email: z.string().email("Incorrect email format"),
  password: z.string().min(8),
});
