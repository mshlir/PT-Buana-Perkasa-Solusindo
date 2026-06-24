-- ============================================================
-- PT BUANA PERKASA SOLUSINDO — Supabase Database Schema
-- Jalankan script ini di Supabase SQL Editor
-- ============================================================

-- ── 1. TABEL DOCUMENTS (SBU, SKK, dll) ──────────────────────
CREATE TABLE IF NOT EXISTS documents (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category    TEXT NOT NULL,        -- 'SBU' atau 'SKK'
  title       TEXT NOT NULL,        -- Nama dokumen
  file_url    TEXT,                 -- URL file di Supabase Storage
  file_name   TEXT,                 -- Nama file asli
  is_public   BOOLEAN DEFAULT true, -- Bisa didownload publik?
  valid_until DATE,                 -- Masa berlaku
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ── 2. TABEL PORTFOLIO (Proyek) ──────────────────────────────
CREATE TABLE IF NOT EXISTS portfolio (
  id             UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title          TEXT NOT NULL,
  title_en       TEXT,
  category       TEXT NOT NULL,     -- 'konstruksi' | 'properti' | 'konsultasi'
  location       TEXT,
  year           INT,
  description    TEXT,
  description_en TEXT,
  cover_url      TEXT,
  is_active      BOOLEAN DEFAULT true,
  sort_order     INT DEFAULT 0,
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- ── 3. TABEL PORTFOLIO PHOTOS ─────────────────────────────────
CREATE TABLE IF NOT EXISTS portfolio_photos (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  portfolio_id UUID REFERENCES portfolio(id) ON DELETE CASCADE,
  photo_url    TEXT NOT NULL,
  caption      TEXT,
  sort_order   INT DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ── 4. TABEL CONTACT MESSAGES ─────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_messages (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT,
  service    TEXT,
  message    TEXT NOT NULL,
  is_read    BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── 5. TABEL TESTIMONIALS ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS testimonials (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  company     TEXT,
  quote       TEXT NOT NULL,
  rating      INT DEFAULT 5,
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ══════════════════════════════════════════════════════════════
-- ROW LEVEL SECURITY (RLS)
-- ══════════════════════════════════════════════════════════════

ALTER TABLE documents        ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio        ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials     ENABLE ROW LEVEL SECURITY;

-- ── Hapus policy lama dulu (agar tidak konflik) ──────────────
DROP POLICY IF EXISTS "Public read documents"         ON documents;
DROP POLICY IF EXISTS "Admin full access documents"   ON documents;
DROP POLICY IF EXISTS "Public read portfolio"         ON portfolio;
DROP POLICY IF EXISTS "Admin full access portfolio"   ON portfolio;
DROP POLICY IF EXISTS "Public read portfolio_photos"  ON portfolio_photos;
DROP POLICY IF EXISTS "Admin full access photos"      ON portfolio_photos;
DROP POLICY IF EXISTS "Public insert contact"         ON contact_messages;
DROP POLICY IF EXISTS "Admin read contact messages"   ON contact_messages;
DROP POLICY IF EXISTS "Admin update contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Public read testimonials"      ON testimonials;

-- ── DOCUMENTS ────────────────────────────────────────────────
-- Siapapun (termasuk pengunjung tanpa login) bisa membaca dokumen
CREATE POLICY "Public read documents"
  ON documents FOR SELECT
  TO anon, authenticated
  USING (true);

-- Hanya admin (authenticated) yang bisa insert/update/delete
CREATE POLICY "Admin write documents"
  ON documents FOR ALL
  TO authenticated
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- ── PORTFOLIO ─────────────────────────────────────────────────
-- Publik bisa baca proyek yang aktif
CREATE POLICY "Public read portfolio"
  ON portfolio FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Admin bisa baca semua (termasuk yang hidden) dan CRUD
CREATE POLICY "Admin read all portfolio"
  ON portfolio FOR SELECT
  TO authenticated
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admin write portfolio"
  ON portfolio FOR ALL
  TO authenticated
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- ── PORTFOLIO PHOTOS ──────────────────────────────────────────
CREATE POLICY "Public read portfolio_photos"
  ON portfolio_photos FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admin write portfolio_photos"
  ON portfolio_photos FOR ALL
  TO authenticated
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- ── CONTACT MESSAGES ──────────────────────────────────────────
-- Siapapun bisa kirim pesan (INSERT)
CREATE POLICY "Public insert contact"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Hanya admin yang bisa baca & update pesan
CREATE POLICY "Admin read contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admin update contact messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (auth.role() = 'authenticated');

-- ── TESTIMONIALS ──────────────────────────────────────────────
CREATE POLICY "Public read testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- ══════════════════════════════════════════════════════════════
-- SAMPLE DATA (Opsional — hapus jika sudah ada data)
-- ══════════════════════════════════════════════════════════════
-- INSERT INTO documents (category, title, is_public) VALUES
--   ('SBU', 'SBU Konstruksi - Bangunan Gedung', true),
--   ('SBU', 'SBU Konstruksi - Sipil', true),
--   ('SBU', 'SBU Konsultansi Konstruksi', true),
--   ('SKK', 'SKK Ahli Teknik Bangunan Gedung', true),
--   ('SKK', 'SKK Ahli Manajemen Konstruksi', true),
--   ('SKK', 'SKK Ahli K3 Konstruksi', true);
