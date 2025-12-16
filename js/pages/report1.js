window.Pages = window.Pages || {};

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

      <!-- Right title + (print-only meta) -->
      <div class="report-header-right">
        <div class="report-header-title">اطلاعات قراردادی</div>

        <!-- فقط در چاپ نمایش داده می‌شود -->
        <div class="report-print-meta">
          <span class="report-print-code">کد گزارش: R-1404-001</span>
          <span class="report-print-date">تاریخ: ۱۴۰۴/۰۵/۰۱</span>
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
