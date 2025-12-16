window.Pages = window.Pages || {};

/* =========================
   Helpers (اگر قبلاً در report1.js یا فایل مشترک داری، این بخش را تکرار نکن)
========================= */

// تاریخ شمسی امروز (YYYY/MM/DD)
function getTodayJalali() {
  const d = new Date();
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(d);
}

// کد گزارش مخصوص report2
function makeReport2Code() {
  const today = getTodayJalali().replace(/\//g, '-');
  return `R2-${today}`;
}

/* =========================
   Page: report2
========================= */

window.Pages.report2 = `
<div id="report2" class="report-page">
  <div class="report-container">

    <!-- Header -->
    <div class="report-header">
      <!-- Right title (اول میاد تا در RTL سمت راست بنشیند) -->
      <div class="report-header-right">
        <div class="report-header-title">نقشه‌ها</div>

        <!-- فقط در چاپ نمایش داده می‌شود -->
        <div class="report-print-meta">
          <span class="report-print-code"></span>
          <span class="report-print-date"></span>
        </div>
      </div>

      <!-- Left actions -->
      <div class="report-actions">
        <button class="btn-lite report-back" type="button">بازگشت</button>
        <button class="btn-lite logout-any" type="button">خروج</button>
      </div>
    </div>

    <!-- Body -->
    <div class="report-body">
      <div class="report-card">

        <div class="report-logos-row">
          <img src="logo-left.jpg" alt="">
          <img src="logo-right.jpg" alt="">
        </div>

        <div class="report-divider"></div>

        <h2 class="report-main-title">نقشه‌ها</h2>
        <p class="report-subtitle">(معماری، سازه، تاسیسات، و غیره)</p>
        <p class="report-meta">بر اساس طرح مصوب – مردادماه ۱۴۰۴</p>

      </div>
    </div>

  </div>
</div>
`;

/* =========================
   Init: report2
   (بعد از render کردن report2 صدا بزن)
========================= */

function initReport2() {
  const page = document.getElementById('report2');
  if (!page) return;

  const dateEl = page.querySelector('.report-print-date');
  const codeEl = page.querySelector('.report-print-code');

  if (dateEl) {
    dateEl.textContent = `تاریخ: ${getTodayJalali()}`;
  }

  if (codeEl) {
    codeEl.textContent = `کد گزارش: ${makeReport2Code()}`;
  }
}

