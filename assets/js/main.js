/* ============================================================
   PT BUANA PERKASA SOLUSINDO — Main JavaScript
   ============================================================ */

const LANG = {
  id: {
    nav: { home: "Beranda", about: "Tentang", services: "Layanan", legality: "Legalitas", portfolio: "Portofolio", contact: "Kontak" },
    hero: {
      badge: "Terpercaya Sejak 2023",
      title: "PT Buana Perkasa",
      titleBold: "Solusindo",
      tagline: "Solusi Terpadu Konstruksi, Konsultasi Bisnis, Properti, Perizinan & Legalitas Usaha",
      desc: "Kami hadir sebagai mitra bisnis terpercaya yang memberikan solusi terpadu dalam bidang konstruksi, konsultan bisnis, properti, perizinan, serta pengurusan legalitas usaha bagi individu maupun perusahaan di seluruh Indonesia.",
      cta1: "Hubungi Kami", cta2: "Lihat Portofolio"
    },
    about: {
      label: "Tentang Perusahaan",
      title: "Mitra Bisnis <span>Terpercaya</span> Anda",
      p1: "PT Buana Perkasa Solusindo adalah perusahaan profesional yang bergerak di bidang konstruksi, konsultan bisnis, properti, dan perizinan serta Legalitas usaha. Dengan pengalaman lebih dari 3 tahun, kami telah melayani puluhan klien dari berbagai sektor industri.",
      p2: "Kami berkomitmen menghadirkan solusi terbaik yang terukur, efisien, dan berorientasi pada hasil nyata bagi setiap mitra bisnis kami.",
      cta: "Hubungi Tim Kami",
      stats: [
        { num: "50+", label: "Proyek Selesai" },
        { num: "50+", label: "Klien Puas" },
        { num: "3+",  label: "Tahun Pengalaman" },
        { num: "10+",  label: "Tenaga Ahli" }
      ]
    },
    services: {
      label: "Layanan Kami",
      title: "Solusi Lengkap untuk <span>Bisnis Anda</span>",
      items: [
        {
          icon: "🏗️", title: "Konstruksi",
          badge: "Sudah memiliki SBU BG009",
          desc: "Perencanaan, pelaksanaan, dan pengawasan proyek konstruksi skala kecil hingga besar dengan standar kualitas tertinggi dan tepat waktu.",
          details: ["Konstruksi Bangunan Gedung", "Renovasi & Rehabilitasi Gedung", "Konstruksi Sipil & Infrastruktur", "Manajemen Proyek Konstruksi"]
        },
        {
          icon: "💼", title: "Konsultan Bisnis",
          desc: "Pendampingan strategi bisnis, analisis pasar, optimasi operasional, dan pengembangan organisasi secara komprehensif dan terukur.",
          details: ["Strategi & Perencanaan Bisnis", "Analisis Pasar & Kompetitor", "Optimasi Operasional", "Pengembangan Organisasi"]
        },
        {
          icon: "🏢", title: "Property Consultant",
          desc: "Konsultasi properti komersial dan residensial, valuasi aset, serta manajemen investasi properti secara profesional dan transparan.",
          details: ["Konsultasi Properti Komersial", "Valuasi & Appraisal Aset", "Manajemen Investasi Properti", "Analisis Kelayakan Properti"]
        },
        {
          icon: "📋", title: "Pengurusan Legalitas",
          desc: "Layanan pengurusan legalitas usaha, perizinan, dan sertifikasi secara lengkap, cepat, tepat, dan terpercaya untuk berbagai jenis badan usaha.",
          details: [
            "Akta Pendirian PT, CV, Yayasan & Koperasi",
            "Perizinan PBG (Persetujuan Bangunan Gedung) & SLF",
            "Sertifikasi Badan Usaha (SBU)",
            "Sertifikat Kompetensi Kerja (SKK)",
            "Pengurusan TKDN, ISO, Halal & SNI"
          ]
        }
      ]
    },
    legality: {
      label: "Legalitas & Sertifikasi",
      title: "Dokumen Resmi <span>Perusahaan</span>",
      desc: "Seluruh dokumen legalitas dan sertifikasi kami tersedia untuk diverifikasi oleh mitra dan klien kami.",
      view: "Lihat Dokumen", download: "Unduh PDF",
      placeholder: "Dokumen akan tersedia setelah diupload oleh admin",
      categories: []   // ← diisi dari Supabase via admin
    },
    portfolio: {
      label: "Portofolio",
      title: "Hasil Karya <span>Terbaik Kami</span>",
      desc: "Dokumentasi proyek-proyek yang telah berhasil kami selesaikan untuk berbagai klien.",
      placeholder: "📸 Foto dokumentasi proyek akan ditambahkan oleh admin",
      filters: ["Semua", "Konstruksi", "Properti", "Konsultasi"],
      viewPhotos: "Lihat Foto",
      items: []   // ← diisi dari Supabase via admin
    },
    contact: {
      label: "Hubungi Kami",
      title: "Mari <span>Berdiskusi</span>",
      desc: "Ceritakan kebutuhan proyek Anda dan tim kami siap memberikan solusi terbaik.",
      name: "Nama Lengkap", email: "Alamat Email", phone: "Nomor Telepon",
      service: "Pilih Layanan", message: "Pesan / Deskripsi Kebutuhan",
      send: "Kirim Pesan", sending: "Mengirim...",
      success: "✅ Pesan berhasil dikirim! Kami akan menghubungi Anda segera.",
      services: ["Konstruksi", "Konsultan Bisnis", "Property Consultant", "Pengurusan Legalitas"],
      info: [
        { icon: "📍", label: "Alamat",         val: "Jl. MT Haryono Kav. 27, Tebet Timur, Tebet, Jakarta Selatan" },
        { icon: "📞", label: "Telepon",         val: "+62 851 6252 8109" },
        { icon: "✉️", label: "Email",           val: "buanaperkasasolusindo@gmail.com" },
        { icon: "🕐", label: "Jam Operasional", val: "Senin – Jumat: 08.00 – 17.00 WIB" }
      ]
    },
    footer: {
      tagline: "Solusi terpadu untuk konstruksi, konsultasi, dan properti Indonesia.",
      rights: "Hak Cipta Dilindungi",
      links: {
        company: "Perusahaan",
        companyLinks: ["Tentang Kami", "Tim Kami", "Karir", "Berita"],
        services: "Layanan",
        serviceLinks: ["Konstruksi", "Konsultan Bisnis", "Property Consultant", "Pengurusan Legalitas"]
      }
    }
  },

  en: {
    nav: { home: "Home", about: "About", services: "Services", legality: "Legality", portfolio: "Portfolio", contact: "Contact" },
    hero: {
      badge: "Trusted Since 2023",
      title: "PT Buana Perkasa",
      titleBold: "Solusindo",
      tagline: "Integrated Solutions for Construction, Business Consulting, Property, Licensing & Business Legality",
      desc: "We are here as a trusted business partner that provides integrated solutions in the fields of construction, business consulting, property, licensing, and business legality management for individuals and companies throughout Indonesia.",
      cta1: "Contact Us", cta2: "View Portfolio"
    },
    about: {
      label: "About Us",
      title: "Your Trusted <span>Business Partner</span>",
      p1: "PT Buana Perkasa Solusindo is a professional company specializing in construction, business consulting, property, and licensing. With over three years of experience, we have served dozens of clients across various industry sectors.",
      p2: "We are committed to delivering the best measurable, efficient, and results-oriented solutions for every one of our business partners.",
      cta: "Contact Our Team",
      stats: [
        { num: "50+", label: "Projects Completed" },
        { num: "50+", label: "Happy Clients" },
        { num: "3+",  label: "Years Experience" },
        { num: "10+",  label: "Expert Staff" }
      ]
    },
    services: {
      label: "Our Services",
      title: "Complete Solutions for <span>Your Business</span>",
      items: [
        {
          icon: "🏗️", title: "Construction",
          badge: "Already have SBU BG009",
          desc: "Planning, execution, and supervision of construction projects from small to large scale with the highest quality standards and on-time delivery.",
          details: ["Building Construction", "Renovation & Building Rehabilitation", "Civil & Infrastructure Construction", "Construction Project Management"]
        },
        {
          icon: "💼", title: "Business Consulting",
          desc: "Business strategy guidance, market analysis, operational optimization, and comprehensive organizational development.",
          details: ["Business Strategy & Planning", "Market & Competitor Analysis", "Operational Optimization", "Organizational Development"]
        },
        {
          icon: "🏢", title: "Property Consultant",
          desc: "Commercial and residential property consulting, asset valuation, and professional property investment management.",
          details: ["Commercial Property Consulting", "Asset Valuation & Appraisal", "Property Investment Management", "Property Feasibility Analysis"]
        },
        {
          icon: "📋", title: "Legality & Licensing",
          desc: "Complete business legality, licensing, and certification services — fast, accurate, and reliable for all types of business entities.",
          details: [
            "Deed of Establishment for PT, CV, Foundation & Cooperative",
            "PBG (Building Approval) & SLF Permits",
            "Business Entity Certificate (SBU)",
            "Work Competency Certificate (SKK)",
            "TKDN, ISO, Halal & SNI Certification"
          ]
        }
      ]
    },
    legality: {
      label: "Legality & Certification",
      title: "Official <span>Company Documents</span>",
      desc: "All our legal documents and certifications are available for verification by our partners and clients.",
      view: "View Document", download: "Download PDF",
      placeholder: "Documents will be available after admin upload",
      categories: []   // ← loaded from Supabase via admin
    },
    portfolio: {
      label: "Portfolio",
      title: "Our Best <span>Work</span>",
      desc: "Documentation of projects we have successfully completed for various clients.",
      placeholder: "📸 Project documentation photos will be added by admin",
      filters: ["All", "Construction", "Property", "Consulting"],
      viewPhotos: "View Photos",
      items: []   // ← loaded from Supabase via admin
    },
    contact: {
      label: "Contact Us",
      title: "Let's <span>Discuss</span>",
      desc: "Tell us about your project needs and our team is ready to provide the best solution.",
      name: "Full Name", email: "Email Address", phone: "Phone Number",
      service: "Select Service", message: "Message / Project Description",
      send: "Send Message", sending: "Sending...",
      success: "✅ Message sent successfully! We will contact you shortly.",
      services: ["Construction", "Business Consulting", "Property Consultant", "Legality & Licensing"],
      info: [
        { icon: "📍", label: "Address",      val: "Jl. MT Haryono Kav. 27, Tebet Timur, Tebet, South Jakarta" },
        { icon: "📞", label: "Phone",        val: "+62 851 6252 8109" },
        { icon: "✉️", label: "Email",        val: "buanaperkasasolusindo@gmail.com" },
        { icon: "🕐", label: "Office Hours", val: "Monday – Friday: 08:00 – 17:00 WIB" }
      ]
    },
    footer: {
      tagline: "Integrated solutions for construction, consulting, and property in Indonesia.",
      rights: "All Rights Reserved",
      links: {
        company: "Company",
        companyLinks: ["About Us", "Our Team", "Career", "News"],
        services: "Services",
        serviceLinks: ["Construction", "Business Consulting", "Property Consultant", "Legality & Licensing"]
      }
    }
  }
};

/* ── State ── */
let currentLang   = localStorage.getItem("lang") || "id";
let currentFilter = 0;

/* ── DOM Ready ── */
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  initNavbar();
  initScrollAnim();
  initPortfolioFilter();
  initContactForm();
  if (typeof initSupabase === "function") initSupabase();
});

/* ── Render All ── */
function renderAll() {
  const t = LANG[currentLang];
  renderNavbar(t);
  renderHero(t);
  renderAbout(t);
  renderServices(t);
  renderLegality(t);
  renderPortfolio(t);
  renderContact(t);
  renderFooter(t);
}

/* ── NAVBAR ── */
function renderNavbar(t) {
  const navKeys = ["home","about","services","legality","portfolio","contact"];
  document.getElementById("nav-links").innerHTML = navKeys.map(k => `
    <a class="nav-link${k === "home" ? " active" : ""}" href="#${k}" data-section="${k}">${t.nav[k]}</a>
  `).join("") + `
    <div class="lang-toggle">
      <button class="lang-btn${currentLang === "id" ? " active" : ""}" onclick="switchLang('id')">ID</button>
      <button class="lang-btn${currentLang === "en" ? " active" : ""}" onclick="switchLang('en')">EN</button>
    </div>`;
  document.getElementById("nav-cta").textContent = t.hero.cta1;
  document.getElementById("mobile-menu").innerHTML = navKeys.map(k => `
    <a class="mobile-nav-link" href="#${k}" onclick="closeMobileMenu()">${t.nav[k]}</a>
  `).join("") + `
    <div class="mobile-lang">
      <button class="lang-btn${currentLang === "id" ? " active" : ""}" onclick="switchLang('id')">ID</button>
      <button class="lang-btn${currentLang === "en" ? " active" : ""}" onclick="switchLang('en')">EN</button>
    </div>`;
}

/* ── HERO ── */
function renderHero(t) {
  document.getElementById("hero-badge").textContent      = t.hero.badge;
  document.getElementById("hero-title").textContent      = t.hero.title;
  document.getElementById("hero-title-bold").textContent = t.hero.titleBold;
  document.getElementById("hero-tagline").textContent    = t.hero.tagline;
  document.getElementById("hero-desc").textContent       = t.hero.desc;
  document.getElementById("hero-cta1").textContent       = t.hero.cta1;
  document.getElementById("hero-cta2").textContent       = t.hero.cta2;
}

/* ── ABOUT ── */
function renderAbout(t) {
  document.getElementById("about-label").textContent = t.about.label;
  document.getElementById("about-title").innerHTML   = t.about.title;
  document.getElementById("about-p1").textContent    = t.about.p1;
  document.getElementById("about-p2").textContent    = t.about.p2;
  document.getElementById("about-cta").textContent   = t.about.cta;
  const styles = ["dark","light","accent","light"];
  document.getElementById("stats-grid").innerHTML = t.about.stats.map((s, i) => `
    <div class="stat-card ${styles[i]} anim anim-delay-${i+1}">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join("");
  initScrollAnim();
}

/* ── SERVICES ── */
function renderServices(t) {
  document.getElementById("services-label").textContent = t.services.label;
  document.getElementById("services-title").innerHTML   = t.services.title;
  document.getElementById("services-grid").innerHTML = t.services.items.map((s, i) => `
    <div class="service-card anim anim-delay-${i+1}">
      <span class="service-icon">${s.icon}</span>
      <div class="service-title">
        ${s.title}
        ${s.badge ? `<span style="display:inline-block;margin-left:8px;background:#CC1E1E;color:white;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;letter-spacing:0.05em;vertical-align:middle">${s.badge}</span>` : ""}
      </div>
      <p class="service-desc">${s.desc}</p>
      ${s.details ? `<ul style="margin-top:12px;padding-left:0;list-style:none;display:flex;flex-direction:column;gap:6px">
        ${s.details.map(d => `<li style="display:flex;align-items:flex-start;gap:8px;font-size:13px;color:#555;line-height:1.4">
          <span style="color:#CC1E1E;font-size:10px;margin-top:4px;flex-shrink:0">▶</span>${d}
        </li>`).join("")}
      </ul>` : ""}
      <div class="service-line"></div>
    </div>`).join("");
  initScrollAnim();
}

/* ── LEGALITY ── */
function renderLegality(t) {
  document.getElementById("legality-label").textContent = t.legality.label;
  document.getElementById("legality-title").innerHTML   = t.legality.title;
  document.getElementById("legality-desc").textContent  = t.legality.desc;
  // Data dokumen dirender oleh supabase.js → loadDocuments()
  // Tampilkan placeholder sementara
  const grid = document.getElementById("legality-grid");
  if (grid && !grid.dataset.supabaseLoaded) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:48px 20px;color:#aaa">
        <div style="font-size:40px;margin-bottom:12px">📄</div>
        <div style="font-size:14px">${t.legality.placeholder}</div>
      </div>`;
  }
}

/* ── PORTFOLIO ── */
function renderPortfolio(t) {
  document.getElementById("portfolio-label").textContent = t.portfolio.label;
  document.getElementById("portfolio-title").innerHTML   = t.portfolio.title;
  document.getElementById("portfolio-desc").textContent  = t.portfolio.desc;
  document.getElementById("portfolio-filters").innerHTML = t.portfolio.filters.map((f, i) => `
    <button class="filter-btn${currentFilter === i ? " active" : ""}" onclick="setFilter(${i})">${f}</button>
  `).join("");
  // Data portofolio dirender oleh supabase.js → loadPortfolio()
  const ph = document.getElementById("portfolio-placeholder");
  if (ph) ph.textContent = t.portfolio.placeholder;
}

/* ── CONTACT ── */
function renderContact(t) {
  document.getElementById("contact-label").textContent = t.contact.label;
  document.getElementById("contact-title").innerHTML   = t.contact.title;
  document.getElementById("contact-desc").textContent  = t.contact.desc;
  document.getElementById("contact-info-list").innerHTML = t.contact.info.map(i => `
    <div class="contact-info-card">
      <div class="contact-icon">${i.icon}</div>
      <div>
        <div class="contact-info-label">${i.label}</div>
        <div class="contact-info-val">${i.val}</div>
      </div>
    </div>`).join("");
  document.getElementById("form-name").placeholder    = t.contact.name;
  document.getElementById("form-email").placeholder   = t.contact.email;
  document.getElementById("form-phone").placeholder   = t.contact.phone;
  document.getElementById("form-message").placeholder = t.contact.message;
  document.getElementById("form-submit").textContent  = t.contact.send;
  const sel = document.getElementById("form-service");
  sel.innerHTML = `<option value="" disabled selected>${t.contact.service}</option>` +
    t.contact.services.map(s => `<option value="${s}">${s}</option>`).join("");
}

/* ── FOOTER ── */
function renderFooter(t) {
  document.getElementById("footer-tagline").textContent = t.footer.tagline;
  document.getElementById("footer-rights").textContent  =
    `© ${new Date().getFullYear()} PT Buana Perkasa Solusindo. ${t.footer.rights}.`;
  document.getElementById("footer-company-title").textContent = t.footer.links.company;
  document.getElementById("footer-company-links").innerHTML =
    t.footer.links.companyLinks.map(l => `<a class="footer-link" href="#">${l}</a>`).join("");
  document.getElementById("footer-services-title").textContent = t.footer.links.services;
  document.getElementById("footer-services-links").innerHTML =
    t.footer.links.serviceLinks.map(l => `<a class="footer-link" href="#services">${l}</a>`).join("");
}

/* ── NAVBAR BEHAVIOR ── */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    updateActiveNav();
  });
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("open");
  });
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection(link.getAttribute("href").replace("#", ""));
    });
  });
  document.getElementById("hero-cta1").addEventListener("click",   () => scrollToSection("contact"));
  document.getElementById("hero-cta2").addEventListener("click",   () => scrollToSection("portfolio"));
  document.getElementById("nav-cta").addEventListener("click",     () => scrollToSection("contact"));
  document.getElementById("about-cta").addEventListener("click",   () => scrollToSection("contact"));
  document.getElementById("hero-scroll").addEventListener("click", () => scrollToSection("about"));
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  document.getElementById("mobile-menu").classList.remove("open");
}

function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
}

function updateActiveNav() {
  const sections = ["home","about","services","legality","portfolio","contact"];
  for (const s of sections) {
    const el = document.getElementById(s);
    if (!el) continue;
    const r = el.getBoundingClientRect();
    if (r.top <= 100 && r.bottom >= 100) {
      document.querySelectorAll(".nav-link").forEach(l => {
        l.classList.toggle("active", l.dataset.section === s);
      });
      break;
    }
  }
}

/* ── SCROLL ANIMATIONS ── */
function initScrollAnim() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.12 });
  document.querySelectorAll(".anim").forEach(el => observer.observe(el));
}

/* ── PORTFOLIO FILTER ── */
function initPortfolioFilter() {}

function setFilter(idx) {
  currentFilter = idx;
  document.querySelectorAll(".filter-btn").forEach((btn, i) => {
    btn.classList.toggle("active", i === idx);
  });
  if (typeof loadPortfolio === "function") loadPortfolio(idx);
}

/* ── LANGUAGE SWITCH ── */
function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  renderAll();
  if (typeof loadDocuments === "function") loadDocuments();
  if (typeof loadPortfolio === "function") loadPortfolio(currentFilter);
  initScrollAnim();
}

/* ── CONTACT FORM ── */
function initContactForm() {
  document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("form-submit");
    const t   = LANG[currentLang];
    const successEl = document.getElementById("form-success");
    const formData = {
      name:    document.getElementById("form-name").value.trim(),
      email:   document.getElementById("form-email").value.trim(),
      phone:   document.getElementById("form-phone").value.trim(),
      service: document.getElementById("form-service").value,
      message: document.getElementById("form-message").value.trim()
    };
    btn.textContent = t.contact.sending;
    btn.disabled    = true;
    successEl.style.display = "none";
    try {
      if (typeof submitContactToSupabase === "function") {
        await submitContactToSupabase(formData);
      } else {
        await new Promise(r => setTimeout(r, 1000));
      }
      btn.textContent = t.contact.send;
      btn.disabled    = false;
      document.getElementById("contact-form").reset();
      successEl.textContent    = t.contact.success;
      successEl.style.color    = "#34d399";
      successEl.style.background  = "";
      successEl.style.borderColor = "";
      successEl.style.display  = "block";
      setTimeout(() => { successEl.style.display = "none"; }, 6000);
    } catch (err) {
      console.error("Form error:", err);
      btn.textContent = t.contact.send;
      btn.disabled    = false;
      successEl.textContent       = currentLang === "en"
        ? "Failed to send. Please try again or contact us via WhatsApp."
        : "Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp.";
      successEl.style.background  = "rgba(204,30,30,0.1)";
      successEl.style.borderColor = "rgba(204,30,30,0.3)";
      successEl.style.color       = "#CC1E1E";
      successEl.style.display     = "block";
      setTimeout(() => {
        successEl.style.display     = "none";
        successEl.style.background  = "";
        successEl.style.borderColor = "";
        successEl.style.color       = "";
      }, 6000);
    }
  });
}
