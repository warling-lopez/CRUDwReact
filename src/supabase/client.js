import { createClient } from '@supabase/supabase-js';

export const client = createClient(
    import.meta.env.VITE_API_SUPABASE_URL, 
    import.meta.env.VITE_API_SUPABASE_ANON_KEY
);
