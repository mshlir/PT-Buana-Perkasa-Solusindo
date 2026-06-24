# PT Buana Perkasa Solusindo — Website

Website company profile PT Buana Perkasa Solusindo dengan Supabase sebagai backend.

---

## Perbaikan Versi Ini

### 1. Admin CRUD Lengkap (admin.html)
- ✅ **Tambah** dokumen & proyek (sudah ada sebelumnya)
- ✅ **Edit** dokumen — tombol ✏️ Edit membuka modal, bisa ubah nama, kategori, masa berlaku, akses, dan ganti file PDF
- ✅ **Edit** proyek — tombol ✏️ Edit membuka modal, bisa ubah semua field dan tambah foto baru
- ✅ **Hapus** dokumen & proyek (sudah ada sebelumnya)
- ✅ **Sembunyikan/Tampilkan** proyek (toggle is_active)

### 2. Dokumen Legalitas Tampil untuk Publik (supabase.js)
- ✅ Dokumen SBU/SKK sekarang tampil di halaman website **tanpa perlu admin login**
- ✅ Penyebab sebelumnya: konflik RLS policy antara `FOR SELECT` (anon) dan `FOR ALL` (authenticated)
- ✅ Solusi: pisahkan policy SELECT (anon + authenticated) dan policy write (authenticated saja)

---

## Langkah Setup

### A. Jalankan SQL di Supabase
1. Buka [Supabase Dashboard](https://app.supabase.com) → project Anda
2. Klik **SQL Editor**
3. Jalankan seluruh isi file `supabase-schema.sql`
   - Script ini akan **hapus policy lama** dan buat ulang yang benar
   - Gunakan `DROP POLICY IF EXISTS` sehingga aman dijalankan ulang

### B. Storage Bucket
Pastikan bucket `buana-files` sudah ada dan bersifat **public**:
1. Supabase Dashboard → **Storage**
2. Buat bucket `buana-files` jika belum ada
3. Centang **Public bucket** agar file PDF dan foto bisa diakses publik

### C. Deploy
Upload semua file ke hosting (Netlify, Vercel, atau web hosting biasa).

---

## Struktur File

```
buana-perkasa-solusindo/
├── index.html              ← Halaman utama (publik)
├── admin.html              ← Dashboard admin (perlu login)
├── assets/
│   ├── css/style.css
│   ├── js/
│   │   ├── main.js         ← Logic utama website
│   │   └── supabase.js     ← Integrasi Supabase (dokumen, portfolio, kontak)
│   └── images/
├── pages/
│   └── portfolio-detail.html
├── supabase-schema.sql     ← Schema DB + RLS policy (jalankan di SQL Editor)
└── netlify.toml
```

---

## Admin Login

Buat user admin di Supabase Dashboard → **Authentication** → **Users** → **Add User**.

URL admin: `https://domain-anda.com/admin.html`
