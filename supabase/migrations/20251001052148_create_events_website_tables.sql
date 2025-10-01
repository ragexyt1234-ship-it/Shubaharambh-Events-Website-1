-- Shubhaarambh Events Website Database Schema
-- Creates comprehensive database structure for the events management website

-- Table 1: events
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  event_date date,
  location text DEFAULT '',
  category text DEFAULT '',
  featured_image text DEFAULT '',
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Table 2: contact_submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  event_type text DEFAULT '',
  event_date date,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Table 3: portfolio_items
CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id) ON DELETE SET NULL,
  title text NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  category text DEFAULT '',
  display_order integer DEFAULT 0,
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Table 4: testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_title text DEFAULT '',
  testimonial_text text NOT NULL,
  rating integer DEFAULT 5,
  event_type text DEFAULT '',
  avatar_url text DEFAULT '',
  is_featured boolean DEFAULT false,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Table 5: service_inquiries
CREATE TABLE IF NOT EXISTS service_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service_type text DEFAULT '',
  budget_range text DEFAULT '',
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for events (public read)
CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  USING (true);

-- RLS Policies for portfolio_items (public read visible items)
CREATE POLICY "Anyone can view visible portfolio items"
  ON portfolio_items FOR SELECT
  USING (is_visible = true);

-- RLS Policies for testimonials (public read approved items)
CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  USING (is_approved = true);

-- RLS Policies for contact_submissions (anyone can insert)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- RLS Policies for service_inquiries (anyone can insert)
CREATE POLICY "Anyone can submit service inquiry"
  ON service_inquiries FOR INSERT
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_events_featured ON events(is_featured);
CREATE INDEX IF NOT EXISTS idx_events_category ON events(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_items(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_visible ON portfolio_items(is_visible);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_service_status ON service_inquiries(status);