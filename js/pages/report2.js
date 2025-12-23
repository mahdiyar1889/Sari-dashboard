window.Pages = window.Pages || {};

/* =========================
   Helpers
========================= */
function getTodayJalali() {
  const d = new Date();
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(d);
}

function makeReport2Code() {
  const today = getTodayJalali().replace(/\//g, '-');
  return `R2-${today}`;
}

/* =========================
   Page: report2 (Maps)
   Layout: LEFT = map + details (stacked)
           RIGHT = zones accordion
========================= */
window.Pages.report2 = `
<div id="report2" class="report-page">
  <div class="report-container">

    <div class="report-header">
      <div class="report-header-right">
        <div class="report-header-title">داشبورد تعاملی پروژه‌ها و نقشه ضوابط پهنه‌بندی</div>

        <div class="report-print-meta">
          <span class="report-print-code"></span>
          <span class="report-print-date"></span>
        </div>
      </div>

      <div class="report-actions">
        <button class="btn-lite report-back" type="button">بازگشت</button>
        <button class="btn-lite logout-any" type="button">خروج</button>
      </div>
    </div>

    <div class="report-body">
      <div class="report-card">

        <div class="r2-grid">

          <!-- LEFT: map + details -->
          <div class="r2-left">

            <div class="r2-card">
              <div class="r2-map-wrap">
                <img class="r2-map-img" alt="نقشه" />

                <button class="r2-zoom r2-zoom-in" type="button">+</button>
                <button class="r2-zoom r2-zoom-out" type="button">−</button>
                <button class="r2-zoom r2-zoom-reset" type="button">⟲</button>
              </div>
            </div>

            <div class="r2-card r2-mt">
              <div class="r2-details-title" id="r2DetailsTitle">—</div>

              <div class="r2-details-grid">
                <div>
                  <div class="r2-details-sub">مشخصات پروژه</div>
                  <div class="r2-kv"><span>کد پهنه:</span><b id="r2ZoneCode">—</b></div>
                  <div class="r2-kv"><span>موقعیت:</span><b id="r2Location">—</b></div>
                  <div class="r2-kv"><span>مساحت:</span><b id="r2Area">—</b></div>
                </div>

                <div>
                  <div class="r2-details-sub">توضیحات</div>
                  <div class="r2-details-text" id="r2Desc">—</div>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT: zones -->
          <aside class="r2-side">
            <div class="r2-side-title">پهنه‌ها</div>
            <div class="r2-accordion" id="r2Accordion"></div>
          </aside>

        </div>

      </div>
    </div>

  </div>
</div>
`;

/* =========================
   Init report2
========================= */
function initReport2() {
  const page = document.getElementById('report2');
  if (!page) return;

  // print meta
  const dateEl = page.querySelector('.report-print-date');
  const codeEl = page.querySelector('.report-print-code');
  if (dateEl) dateEl.textContent = `تاریخ: ${getTodayJalali()}`;
  if (codeEl) codeEl.textContent = `کد گزارش: ${makeReport2Code()}`;

  // ✅ Data (فعلاً همان نقشه شما)
  const mapsData = [
    {
      groupId: 'S1',
      groupTitle: 'زیرزمین',
      items: [
        {
          id: 'S1-sport',
          title: 'انبار',
          zoneCode: 'S12/S13',
          location: 'ورودی شهرک',
          area: '434,289 م.م',
          desc: 'ساختمان تکمیلی اداره کل راه و شهرسازی استان مازندران',
          img: 'maps/zirzamin.jpg'
        }
      ]
    }
  ];

  const acc = page.querySelector('#r2Accordion');
  const mapImg = page.querySelector('.r2-map-img');

  const els = {
    title: page.querySelector('#r2DetailsTitle'),
    zone: page.querySelector('#r2ZoneCode'),
    loc: page.querySelector('#r2Location'),
    area: page.querySelector('#r2Area'),
    desc: page.querySelector('#r2Desc')
  };

  // zoom state
  const zoomState = { scale: 1 };

  function applyZoom() {
    if (!mapImg) return;
    mapImg.style.transform = `scale(${zoomState.scale})`;
  }

  function setActive(item) {
    if (mapImg) mapImg.src = item.img;

    if (els.title) els.title.textContent = item.title || '—';
    if (els.zone) els.zone.textContent = item.zoneCode || '—';
    if (els.loc) els.loc.textContent = item.location || '—';
    if (els.area) els.area.textContent = item.area || '—';
    if (els.desc) els.desc.textContent = item.desc || '—';

    page.querySelectorAll('.r2-item-btn.is-active')
      .forEach(x => x.classList.remove('is-active'));
    const btn = page.querySelector(`.r2-item-btn[data-id="${item.id}"]`);
    if (btn) btn.classList.add('is-active');

    zoomState.scale = 1;
    applyZoom();
  }

  function renderAccordion() {
    if (!acc) return;

    acc.innerHTML = mapsData.map((g) => {
      const itemsHtml = g.items.map(it => `
        <button type="button" class="r2-item-btn" data-id="${it.id}">
          ${it.title}
        </button>
      `).join('');

      return `
        <section class="r2-acc is-open">
          <button type="button" class="r2-acc-head">
            <span>${g.groupTitle}</span>
            <span class="r2-acc-caret">▾</span>
          </button>
          <div class="r2-acc-body">${itemsHtml}</div>
        </section>
      `;
    }).join('');

    // accordion toggle
    acc.querySelectorAll('.r2-acc-head').forEach(head => {
      head.addEventListener('click', () => {
        const sec = head.closest('.r2-acc');
        if (!sec) return;
        sec.classList.toggle('is-open');
      });
    });

    // item click
    acc.querySelectorAll('.r2-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = mapsData.flatMap(g => g.items).find(x => x.id === id);
        if (item) setActive(item);
      });
    });
  }

  renderAccordion();

  // initial
  const initial = mapsData[0]?.items?.[0];
  if (initial) setActive(initial);

  // zoom controls
  page.querySelector('.r2-zoom-in')?.addEventListener('click', () => {
    zoomState.scale = Math.min(3, +(zoomState.scale + 0.1).toFixed(2));
    applyZoom();
  });

  page.querySelector('.r2-zoom-out')?.addEventListener('click', () => {
    zoomState.scale = Math.max(1, +(zoomState.scale - 0.1).toFixed(2));
    applyZoom();
  });

  page.querySelector('.r2-zoom-reset')?.addEventListener('click', () => {
    zoomState.scale = 1;
    applyZoom();
  });

  // wheel zoom
  const wrap = page.querySelector('.r2-map-wrap');
  wrap?.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.08 : 0.08;
    zoomState.scale = Math.min(3, Math.max(1, +(zoomState.scale + delta).toFixed(2)));
    applyZoom();
  }, { passive: false });
}
