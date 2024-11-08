
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey){
  throw new Error('Missing supabase environment variabel');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
        