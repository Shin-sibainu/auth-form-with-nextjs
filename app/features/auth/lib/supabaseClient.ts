import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABSE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABSE_ANON_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey);
