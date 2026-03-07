# PT Buana Perkasa Solusindo — Website Company Profile
### Versi Final — Siap Deploy ke Netlify

## 📁 Struktur Folder
```
buana-perkasa-solusindo/
├── index.html                  ← Halaman utama
├── 404.html                    ← Halaman error (auto-redirect 10 detik)
├── admin.html                  ← Dashboard admin
├── sitemap.xml                 ← SEO sitemap
├── robots.txt                  ← Panduan mesin pencari
├── netlify.toml                ← Konfigurasi Netlify
├── supabase-schema.sql         ← Script database
├── assets/
│   ├── css/style.css
│   ├── js/main.js & supabase.js
│   └── images/ (logo + favicon)
└── pages/portfolio-detail.html
```

## 🚀 Deploy ke Netlify
1. Daftar di https://netlify.com
2. "Add new site" → "Deploy manually"
3. Drag & drop folder ini → selesai!

## 🔌 Setup Supabase
1. Daftar di https://supabase.com
2. Jalankan `supabase-schema.sql` di SQL Editor
3. Buat storage bucket `buana-files` (public)
4. Copy URL & anon key → paste ke `supabase.js`, `admin.html`, `portfolio-detail.html`
5. Buat akun admin di Authentication → Users

## 📱 Ganti Nomor WhatsApp
Cari `62XXXXXXXXXXX` di `index.html` dan `portfolio-detail.html`
Ganti format: 0812-3456-7890 → 6281234567890

## ✅ Checklist Sebelum Launch
- [ ] Supabase URL & key diisi di 3 file
- [ ] Nomor WhatsApp diisi
- [ ] Konten (alamat, email, telp) diisi di main.js
- [ ] Dokumen SBU & SKK diupload via admin.html
- [ ] Foto portofolio diupload via admin.html
- [ ] URL domain di sitemap.xml sudah diupdate
