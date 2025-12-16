window.Pages = window.Pages || {};

window.Pages.report2 = `
<div id="report2" class="report-page">
  <div class="report-container">
    <div class="report-header">
      <div class="report-header-title">نقشه‌ها</div>
      <div class="report-actions">
        <button class="btn-lite report-back" type="button">بازگشت</button>
        <button class="btn-lite logout-any" type="button">خروج</button>
      </div>
    </div>

    <div class="report-body">
      <div class="report-card">
        <div class="report-logos-row">
          <img src="logo-left.jpg" alt="">
          <img src="logo-right.jpg" alt="">
        </div>

        <div class="report-divider"></div>

        <h2 class="report-main-title">نقشه‌ها</h2>
        <p class="report-subtitle">(معماری، سازه، تأسیسات، و ...)</p>
        <p class="report-meta">بر اساس طرح مصوب – مردادماه ۱۴۰۴</p>

        <div class="maps-grid">
          <div class="maps-card">
            <div class="maps-card-title">معماری</div>
            <div class="maps-list">
              <div class="maps-item">
                <div class="maps-item-name">پلان طبقه همکف (PDF)</div>
                <a class="maps-download" href="files/maps/architecture/plan-ground.pdf" download>دانلود</a>
              </div>
            </div>
          </div>

          <div class="maps-card">
            <div class="maps-card-title">سازه</div>
            <div class="maps-list">
              <div class="maps-item">
                <div class="maps-item-name">پلان فونداسیون (PDF)</div>
                <a class="maps-download" href="files/maps/structure/foundation.pdf" download>دانلود</a>
              </div>
            </div>
          </div>

          <div class="maps-card">
            <div class="maps-card-title">تأسیسات</div>
            <div class="maps-list">
              <div class="maps-item">
                <div class="maps-item-name">برق و روشنایی (PDF)</div>
                <a class="maps-download" href="files/maps/mep/electrical.pdf" download>دانلود</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
`;
