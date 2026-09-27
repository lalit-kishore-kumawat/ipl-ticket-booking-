import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://odaefqvgqwfwcpsyoyed.supabase.co";
const supabaseKey = "sb_publishable_ACRGjKYfJK_3GLnP-V-HDA_UphmamFl";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);