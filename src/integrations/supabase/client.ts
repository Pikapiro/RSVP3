// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xtfitzcozmztccrxfmnn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0Zml0emNvem16dGNjcnhmbW5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MzQzMjQsImV4cCI6MjA2NDIxMDMyNH0.BKCAIYyOc4bWlDRem65YoU8SMJajCURMsbLMdvVmsmQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);