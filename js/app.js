document.addEventListener("DOMContentLoaded", () => {
  // اگر لاگین نیست → صفحه ورود
  if (!isLoggedIn()) showPage("loginPage");
  else showPage("introPage");

  // --- Login ---
  const loginForm = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginError.textContent = "";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const ok = login(email, password);
    if (!ok) {
      loginError.textContent = "ایمیل یا رمز عبور اشتباه است.";
      return;
    }

    showPage("introPage");
  });

  // --- Navigation ---
  document.getElementById("introTitle")
    .addEventListener("click", () => showPage("tocPage"));

  document.getElementById("tocBack")
    .addEventListener("click", () => showPage("introPage"));

  document.querySelectorAll(".toc-card").forEach(card => {
    card.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      if (targetId) showPage(targetId);
    });
  });

  document.querySelectorAll(".report-back").forEach(btn => {
    btn.addEventListener("click", () => showPage("tocPage"));
  });

  // --- Logout buttons ---
  const logoutButtons = [
    document.getElementById("logoutBtn1"),
    document.getElementById("logoutBtn2"),
    ...document.querySelectorAll(".logout-any")
  ].filter(Boolean);

  logoutButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      logout();
      showPage("loginPage");
    });
  });
});
