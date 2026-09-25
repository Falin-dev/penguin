import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(import.meta.dirname, "../../.env") });

export const DATABASE_URL =  process.env.DATABASE_URL
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET;
export const SUPABASE_URL = process.env.SUPABASE_URL
export const SUPABASE_KEY = process.env.SUPABASE_KEY