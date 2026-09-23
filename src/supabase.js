import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aqskovwwvqccikrhdnpr.supabase.co";
const supabaseKey = "sb_publishable_YRUNR_nGp-K86IgTUymQdQ_65FwTSaJ";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);