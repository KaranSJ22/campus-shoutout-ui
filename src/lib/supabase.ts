import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vgffbrxbctzuadescozp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnZmZicnhiY3R6dWFkZXNjb3pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMzc5NDUsImV4cCI6MjA3OTkxMzk0NX0.vOij1lzBRLu6WWN8HrUCrl6CvlYd9MdojnFL8zEvouw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
