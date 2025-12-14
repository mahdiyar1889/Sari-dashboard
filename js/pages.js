const pageIds = [
  "loginPage",
  "introPage",
  "tocPage",
  "report1",
  "report2",
  "report3",
  "report4",
  "report5",
  "report6"
];

function hideAllPages() {
  pageIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
}

function showPage(id) {
  hideAllPages();
  const el = document.getElementById(id);
  if (!el) return;

  // نمایش درست برای Intro (فلکس) و بقیه (بلاک)
  if (id === "introPage" || id === "loginPage") {
    el.style.display = "flex";
  } else {
    el.style.display = "block";
  }

  window.scrollTo(0, 0);
}
