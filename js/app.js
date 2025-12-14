document.addEventListener("DOMContentLoaded", () => {
  const USER_EMAIL = "dashboard@parsparnoun.com";
  const USER_PASS  = "123456";
  const AUTH_KEY   = "isLoggedIn";

  const app = document.getElementById("app");

  // Inject all pages
  app.innerHTML =
    Pages.login +
    Pages.intro +
    Pages.toc +
    Pages.report1 +
    Pages.report2 +
    Pages.report3 +
    Pages.report4 +
    Pages.report5 +
    Pages.report6;

  const pageIds = ["loginPage","introPage","tocPage","report1","report2","report3","report4","report5","report6"];

  function hideAll(){
    pageIds.forEach(id=>{
      const el = document.getElementById(id);
      if(el) el.style.display = "none";
    });
  }

  function showPage(id){
    hideAll();
    const el = document.getElementById(id);
    if(!el) return;
    el.style.display = (id === "loginPage" || id === "introPage") ? "flex" : "block";
    window.scrollTo(0,0);
  }

  function isLoggedIn(){
    return localStorage.getItem(AUTH_KEY) === "1";
  }

  function logout(){
    localStorage.removeItem(AUTH_KEY);
    showPage("loginPage");
  }

  // First page
  showPage(isLoggedIn() ? "introPage" : "loginPage");

  // Login
  const loginForm = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginError.textContent = "";

    const email = document.getElementById("email").value.trim().toLowerCase();
    const pass  = document.getElementById("password").value.trim();

    if(email === USER_EMAIL && pass === USER_PASS){
      localStorage.setItem(AUTH_KEY, "1");
      showPage("introPage");
    }else{
      loginError.textContent = "ایمیل یا رمز عبور اشتباه است.";
    }
  });

  // Intro -> TOC
  document.getElementById("introTitle").addEventListener("click", () => showPage("tocPage"));

  // TOC back -> Intro
  document.getElementById("tocBack").addEventListener("click", () => showPage("introPage"));

  // TOC cards -> reports
  document.querySelectorAll(".toc-card").forEach(card => {
    card.addEventListener("click", function(){
      const target = this.getAttribute("data-target");
      if(target) showPage(target);
    });
  });

  // Report back -> TOC
  document.querySelectorAll(".report-back").forEach(btn => {
    btn.addEventListener("click", () => showPage("tocPage"));
  });

  // Logout buttons
  document.getElementById("logoutBtn1")?.addEventListener("click", logout);
  document.getElementById("logoutBtn2")?.addEventListener("click", logout);
  document.querySelectorAll(".logout-any").forEach(btn => btn.addEventListener("click", logout));
});
