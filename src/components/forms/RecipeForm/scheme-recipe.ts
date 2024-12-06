import { z } from "zod";

export const schemeRecipe = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  name: z.string().min(1),
  ingriditens: z.array(z.string().min(1)),
  servingSize: z.number().min(1),
  cookingTime: z.string().min(1),
});
