import z from 'zod'

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:3333'),
  API_URL: z.string().url().default('http://localhost:3333'),
  NODE_ENV: z.string().default('development'),
  NODE_ENV2: z.string().default('development'),
  MOCK: z.string().default('false'),
  NEXT_PUBLIC_MOCK: z.string().default('false'),
})

export const env = envSchema.parse(process.env)
