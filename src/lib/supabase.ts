import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string | null;
  message: string;
  status?: string;
  created_at?: string;
};

export type ServiceInquiry = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service_type: string;
  budget_range: string;
  message: string;
  status?: string;
  created_at?: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_title: string;
  testimonial_text: string;
  rating: number;
  event_type: string;
  avatar_url: string;
  is_featured: boolean;
  is_approved: boolean;
  created_at: string;
};

export type PortfolioItem = {
  id: string;
  event_id: string | null;
  title: string;
  description: string;
  image_url: string;
  category: string;
  display_order: number;
  is_visible: boolean;
  created_at: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  event_date: string | null;
  location: string;
  category: string;
  featured_image: string;
  is_featured: boolean;
  created_at: string;
};
