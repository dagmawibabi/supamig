import { Pool } from "pg";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  baseURL: "http://localhost:3000",
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
