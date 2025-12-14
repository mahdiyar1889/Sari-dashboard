window.Pages = window.Pages || {};

window.Pages.login = `
<div id="loginPage" class="login-page">
  <div class="login-card">
    <h1 class="login-title">ورود به داشبورد</h1>

    <form id="loginForm" class="login-form">
      <label class="login-label">ایمیل</label>
      <input id="email" class="login-input" type="email" required />

      <label class="login-label">رمز عبور</label>
      <input id="password" class="login-input" type="password" required />

      <button class="login-button" type="submit">ورود</button>
      <p id="loginError" class="login-error"></p>
    </form>
  </div>
</div>
`;
