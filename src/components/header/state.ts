import { z } from "zod";

export const state = z.object({
  name: z.string(),
  linker: z.string().url(),
});
