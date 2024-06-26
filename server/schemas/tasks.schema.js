import { z } from "zod";

export const createTaskSchema = z.object({
  name_task: z.string({
    required_error: "Name is required",
  }),
  completed_task:z.boolean().optional()
});