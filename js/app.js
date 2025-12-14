document.addEventListener("DOMContentLoaded", () => {
  const USER_EMAIL = "dashboard@parsparnoun.com";
  const USER_PASS  = "123456";
  const AUTH_KEY   = "isLoggedIn";

  const pageIds = ["loginPage","introPage","tocPage","report1","report2","report3","report4","report5","report6"];

  function hideAllPages() {
    pageIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.setProperty("display", "none", "important");
    });
  }

  function showPage(id) {
    hideAllPages();
    const el = document.getElementById(id);
    if (!el) return;
    const mode = (id === "loginPage" || id === "introPage") ? "flex" : "block";
    el.style.setProperty("display", mode, "important");
    window.scrollTo(0, 0);
  }

  function isLoggedIn() {
    return localStorage.getItem(AUTH_KEY) === "1";
  }

  function doLogin(email, password) {
    const e = (email || "").trim().toLowerCase();
    const p = (password || "").trim();
    if (e === USER_EMAIL.toLowerCase() && p === USER_PASS) {
      localStorage.setItem(AUTH_KEY, "1");
      return true;
    }
    return false;
  }

  function doLogout() {
    localStorage.removeItem(AUTH_KEY);
  }

  // صفحه اول
  if (!isLoggedIn()) showPage("loginPage");
  else showPage("introPage");

  // Login form
  const loginForm  = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError");

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (loginError) loginError.textContent = "";

    const email = document.getElementById("email")?.value || "";
    const password = document.getElementById("password")?.value || "";

    if (!doLogin(email, password)) {
      if (loginError) loginError.textContent = "ایمیل یا رمز عبور اشتباه است.";
      return;
    }
    showPage("introPage");
  });

  // navigation
  document.getElementById("introTitle")?.addEventListener("click", () => showPage("tocPage"));
  document.getElementById("tocBack")?.addEventListener("click", () => showPage("introPage"));

  document.querySelectorAll(".toc-card").forEach(card => {
    card.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      if (targetId) showPage(targetId);
    });
  });

  document.querySelectorAll(".report-back").forEach(btn => {
    btn.addEventListener("click", () => showPage("tocPage"));
  });

  // logout buttons (اگر در HTML گذاشتی)
  document.querySelectorAll("#logoutBtn1, #logoutBtn2, .logout-any").forEach(btn => {
    btn.addEventListener("click", () => {
      doLogout();
      showPage("loginPage");
    });
  });
});
