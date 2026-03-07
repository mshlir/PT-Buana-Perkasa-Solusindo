-- ============================================================
-- PT BUANA PERKASA SOLUSINDO — Supabase Database Schema
-- Jalankan script ini di Supabase SQL Editor
-- ============================================================

-- ── 1. TABEL DOCUMENTS (SBU, SKK, dll) ──────────────────────
CREATE TABLE documents (
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
CREATE TABLE portfolio (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title       TEXT NOT NULL,        -- Nama proyek
  title_en    TEXT,                 -- Nama proyek (Inggris)
  category    TEXT NOT NULL,        -- 'konstruksi' | 'properti' | 'konsultasi'
  location    TEXT,                 -- Kota / lokasi proyek
  year        INT,                  -- Tahun selesai
  description TEXT,                 -- Deskripsi proyek (opsional)
  description_en TEXT,              -- Deskripsi (Inggris)
  cover_url   TEXT,                 -- URL foto utama
  is_active   BOOLEAN DEFAULT true, -- Tampilkan di website?
  sort_order  INT DEFAULT 0,        -- Urutan tampil
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ── 3. TABEL PORTFOLIO PHOTOS (Foto per proyek) ──────────────
CREATE TABLE portfolio_photos (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  portfolio_id UUID REFERENCES portfolio(id) ON DELETE CASCADE,
  photo_url    TEXT NOT NULL,
  caption      TEXT,
  sort_order   INT DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ── 4. TABEL CONTACT MESSAGES (Pesan dari form kontak) ───────
CREATE TABLE contact_messages (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT,
  service    TEXT,                  -- Layanan yang diminati
  message    TEXT NOT NULL,
  is_read    BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── 5. TABEL TESTIMONIALS (Testimoni klien) ──────────────────
CREATE TABLE testimonials (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  company    TEXT,
  quote      TEXT NOT NULL,
  rating     INT DEFAULT 5,         -- 1-5 bintang
  is_active  BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── ROW LEVEL SECURITY (RLS) ─────────────────────────────────
-- Aktifkan RLS di semua tabel
ALTER TABLE documents         ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio         ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_photos  ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages  ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials      ENABLE ROW LEVEL SECURITY;

-- Publik bisa baca documents, portfolio, testimonials
CREATE POLICY "Public read documents"
  ON documents FOR SELECT USING (true);

CREATE POLICY "Public read portfolio"
  ON portfolio FOR SELECT USING (is_active = true);

CREATE POLICY "Public read portfolio_photos"
  ON portfolio_photos FOR SELECT USING (true);

CREATE POLICY "Public read testimonials"
  ON testimonials FOR SELECT USING (is_active = true);

-- Publik bisa INSERT ke contact_messages (kirim pesan)
CREATE POLICY "Public insert contact"
  ON contact_messages FOR INSERT WITH CHECK (true);

-- Hanya admin (authenticated) yang bisa ubah data
CREATE POLICY "Admin full access documents"
  ON documents FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access portfolio"
  ON portfolio FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access photos"
  ON portfolio_photos FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin read contact messages"
  ON contact_messages FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admin update contact messages"
  ON contact_messages FOR UPDATE USING (auth.role() = 'authenticated');

-- ── SAMPLE DATA (Opsional, hapus jika tidak perlu) ───────────
INSERT INTO documents (category, title, is_public) VALUES
  ('SBU', 'SBU Konstruksi - Bangunan Gedung', true),
  ('SBU', 'SBU Konstruksi - Sipil', true),
  ('SBU', 'SBU Konsultansi Konstruksi', true),
  ('SKK', 'SKK Ahli Teknik Bangunan Gedung', true),
  ('SKK', 'SKK Ahli Manajemen Konstruksi', true),
  ('SKK', 'SKK Ahli K3 Konstruksi', true);

INSERT INTO portfolio (title, title_en, category, location, year, is_active, sort_order) VALUES
  ('Gedung Perkantoran 8 Lantai',        '8-Story Office Building',           'konstruksi', 'Jakarta Selatan', 2023, true, 1),
  ('Kompleks Perumahan Griya Asri',      'Griya Asri Housing Complex',        'properti',   'Tangerang',       2023, true, 2),
  ('Renovasi Gedung Pemerintahan',       'Government Building Renovation',    'konstruksi', 'Bekasi',          2022, true, 3),
  ('Strategi Ekspansi Bisnis Retail',    'Retail Business Expansion Strategy','konsultasi', 'Bandung',         2022, true, 4),
  ('Pusat Perbelanjaan Modern',          'Modern Shopping Center',            'properti',   'Depok',           2021, true, 5),
  ('Infrastruktur Jalan & Drainase',     'Road & Drainage Infrastructure',    'konstruksi', 'Bogor',           2021, true, 6);
