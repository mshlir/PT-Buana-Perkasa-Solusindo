// PT BUANA PERKASA SOLUSINDO - Supabase Integration
// Ganti URL dan KEY di bawah dengan milik Anda

const SUPABASE_URL = "https://zcaggwwdqugjwrnkrxyv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjYWdnd3dkcXVnandybmtyeHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4NjcyMDAsImV4cCI6MjA4ODQ0MzIwMH0.pQaA1nF610JDX35bmmedOlD-FptmTwCUL5Fqg4G15EU";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// DOCUMENTS - SBU & SKK
// ============================================================

async function fetchDocuments() {
  var result = await sb.from("documents").select("*").order("category").order("title");
  if (result.error) { console.error("fetchDocuments:", result.error); return []; }
  return result.data;
}

async function loadDocuments() {
  var docs = await fetchDocuments();
  var grid = document.getElementById("legality-grid");
  if (!grid) return;

  var t = (typeof LANG !== "undefined") ? LANG[currentLang || "id"] : null;
  var viewText = t ? t.legality.view : "Lihat";
  var dlText = t ? t.legality.download : "Unduh PDF";
  var placeholder = t ? t.legality.placeholder : "Dokumen akan tersedia setelah upload oleh admin";

  var sbu = docs.filter(function(d) { return d.category === "SBU"; });
  var skk = docs.filter(function(d) { return d.category === "SKK"; });

  function renderCat(items, color, icon, title) {
    var rows = items.map(function(doc) {
      return '<div class="doc-item">' +
        '<div class="doc-item-name">&#128196; ' + doc.title +
          (doc.valid_until ? '<span style="font-size:11px;color:#aaa;margin-left:8px;">s/d ' +
            new Date(doc.valid_until).toLocaleDateString("id-ID") + '</span>' : '') +
        '</div>' +
        '<div class="doc-item-actions">' +
          '<button class="doc-btn-view" onclick="viewDoc(\'' + (doc.file_url || '') + '\')">&#128065; ' + viewText + '</button>' +
          (doc.is_public && doc.file_url
            ? '<a href="' + doc.file_url + '" target="_blank" download><button class="doc-btn-dl ' + color + '">&#8595; ' + dlText + '</button></a>'
            : '<button class="doc-btn-dl ' + color + '" style="opacity:0.4;cursor:not-allowed">&#8595; ' + dlText + '</button>') +
        '</div>' +
      '</div>';
    }).join("");

    return '<div class="doc-card">' +
      '<div class="doc-card-header ' + color + '">' +
        '<div class="doc-icon-wrap">' + icon + '</div>' +
        '<div class="doc-card-title">' + title + '</div>' +
      '</div>' +
      '<div class="doc-card-body">' +
        (rows || '') +
        (!items.every(function(d) { return d.file_url; })
          ? '<div class="doc-placeholder">&#128206; ' + placeholder + '</div>' : '') +
      '</div>' +
    '</div>';
  }

  var lang = currentLang || "id";
  var sbuTitle = lang === "en" ? "Business Entity Certificate (SBU)" : "Sertifikat Badan Usaha (SBU)";
  var skkTitle = lang === "en" ? "Work Competency Certificate (SKK)" : "Sertifikat Kompetensi Kerja (SKK)";

  if (!sbu.length && !skk.length && typeof LANG !== "undefined") {
    return;
  }

  grid.innerHTML = renderCat(sbu, "blue", "&#127963;", sbuTitle) +
                   renderCat(skk, "teal", "&#127891;", skkTitle);
}

function viewDoc(fileUrl) {
  if (fileUrl) {
    window.open(fileUrl, "_blank");
  } else {
    alert("Dokumen belum tersedia. Admin belum mengupload file ini.");
  }
}

// ============================================================
// PORTFOLIO
// ============================================================

async function fetchPortfolio(category) {
  var query = sb.from("portfolio")
    .select("*, portfolio_photos(photo_url, caption, sort_order)")
    .eq("is_active", true)
    .order("sort_order");

  if (category) {
    query = query.eq("category", category);
  }

  var result = await query;
  if (result.error) { console.error("fetchPortfolio:", result.error); return []; }
  return result.data;
}

async function loadPortfolio(filterIndex) {
  if (typeof filterIndex === "undefined") filterIndex = 0;
  var categoryMap = [null, "konstruksi", "properti", "konsultasi"];
  var cat = categoryMap[filterIndex];
  var items = await fetchPortfolio(cat);
  var lang = (typeof currentLang !== "undefined") ? currentLang : "id";

  var colorMap = { konstruksi: "#1e40af", properti: "#0f766e", konsultasi: "#7c3aed" };
  var iconMap  = { konstruksi: "&#128679;", properti: "&#127970;", konsultasi: "&#128188;" };

  var grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  if (!items.length) {
    var emptyText = lang === "en" ? "No projects in this category yet." : "Belum ada proyek di kategori ini.";
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#aaa;">' + emptyText + '</div>';
    return;
  }

  grid.innerHTML = items.map(function(p, i) {
    var title = (lang === "en" && p.title_en) ? p.title_en : p.title;
    var coverUrl = p.cover_url || (p.portfolio_photos && p.portfolio_photos[0] ? p.portfolio_photos[0].photo_url : null);
    var catLabels = lang === "en"
      ? { konstruksi: "Construction", properti: "Property", konsultasi: "Consulting" }
      : { konstruksi: "Konstruksi", properti: "Properti", konsultasi: "Konsultasi" };
    var catLabel = catLabels[p.category] || p.category;
    var delay = (i % 3) + 1;

    return '<div class="portfolio-card anim anim-delay-' + delay + '" onclick="window.location.href=\'pages/portfolio-detail.html?id=' + p.id + '\'" style="cursor:pointer">' +
      '<div class="portfolio-img" style="' + (coverUrl ? '' : 'background:linear-gradient(135deg,' + colorMap[p.category] + 'dd,' + colorMap[p.category] + '88)') + '">' +
        (coverUrl ? '<img src="' + coverUrl + '" alt="' + title + '" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;">' : '<span style="font-size:52px;opacity:0.5">' + iconMap[p.category] + '</span>') +
        '<div class="portfolio-img-overlay"><span class="portfolio-overlay-text">&#128247; ' + (lang === "en" ? "View Photos" : "Lihat Foto") + '</span></div>' +
        '<div class="portfolio-badge">' + catLabel + '</div>' +
        '<div class="portfolio-meta">&#128205; ' + (p.location || "") + ' &middot; ' + (p.year || "") + '</div>' +
      '</div>' +
      '<div class="portfolio-info">' +
        '<div class="portfolio-title">' + title + '</div>' +
        '<div class="portfolio-sub">' + (p.location || "") + ' &middot; ' + (p.year || "") + '</div>' +
      '</div>' +
    '</div>';
  }).join("");

  var ph = document.getElementById("portfolio-placeholder");
  if (ph) ph.style.display = "none";

  if (typeof initScrollAnim === "function") initScrollAnim();
}

// ============================================================
// CONTACT FORM - Simpan ke Supabase
// ============================================================

async function submitContactToSupabase(formData) {
  var result = await sb.from("contact_messages").insert([{
    name:    formData.name,
    email:   formData.email,
    phone:   formData.phone,
    service: formData.service,
    message: formData.message
  }]);
  if (result.error) throw result.error;
}

// ============================================================
// FILTER PORTFOLIO
// ============================================================

window.setFilter = async function(idx) {
  if (typeof currentFilter !== "undefined") currentFilter = idx;

  var t = (typeof LANG !== "undefined" && typeof currentLang !== "undefined") ? LANG[currentLang] : null;
  if (t) {
    var filtersEl = document.getElementById("portfolio-filters");
    if (filtersEl) {
      filtersEl.innerHTML = t.portfolio.filters.map(function(f, i) {
        return '<button class="filter-btn' + (idx === i ? " active" : "") + '" onclick="setFilter(' + i + ')">' + f + '</button>';
      }).join("");
    }
  }

  await loadPortfolio(idx);
};

// ============================================================
// INIT - dipanggil setelah DOM ready
// ============================================================

async function initSupabase() {
  try {
    await loadDocuments();
  } catch(e) {
    console.warn("loadDocuments error:", e);
  }
  try {
    await loadPortfolio(0);
  } catch(e) {
    console.warn("loadPortfolio error:", e);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (typeof initSupabase === "function") {
    initSupabase();
  }
});
