window.Pages = window.Pages || {};

/* =========================
   Helpers (مشترک)
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

// تولید کد گزارش مخصوص report1
function makeReport1Code() {
  const today = getTodayJalali().replace(/\//g, '-');
  return `R1-${today}`;
}

/* =========================
   Page: report1
========================= */

window.Pages.report1 = `
<div id="report1" class="report-page">
  <div class="report-container">

    <!-- Header -->
    <div class="report-header">
      <!-- Left actions -->
      <div class="report-actions">
        <button class="btn-lite report-back" type="button">بازگشت</button>
        <button class="btn-lite logout-any" type="button">خروج</button>
      </div>

      <!-- Right title + print meta -->
      <div class="report-header-right">
        <div class="report-header-title">اطلاعات قراردادی</div>

        <!-- فقط در چاپ نمایش داده می‌شود -->
        <div class="report-print-meta">
          <span class="report-print-code"></span>
          <span class="report-print-date"></span>
        </div>
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

        <h2 class="report-main-title">اطلاعات قراردادی</h2>
        <p class="report-subtitle">(موضوع، مدت، مبلغ، و اسناد پیوست)</p>
        <p class="report-meta">بر اساس طرح مصوب – مردادماه ۱۴۰۴</p>

      </div>
    </div>

  </div>
</div>
`;

/* =========================
   Init: report1 (خیلی مهم)
========================= */

function initReport1() {
  const page = document.getElementById('report1');
  if (!page) return;

  const dateEl = page.querySelector('.report-print-date');
  const codeEl = page.querySelector('.report-print-code');

  if (dateEl) {
    dateEl.textContent = `تاریخ: ${getTodayJalali()}`;
  }

  if (codeEl) {
    codeEl.textContent = `کد گزارش: ${makeReport1Code()}`;
  }
}
