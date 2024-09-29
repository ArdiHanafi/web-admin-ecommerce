import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const BonusSchema = z.object({
  code: z.string(),
  amount: z.string(),
  wagerRequirement: z.string(),
  isGlobal: z.boolean().optional(),
  username: z.string().optional(),
});
