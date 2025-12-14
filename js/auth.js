const AUTH_KEY = "isLoggedIn";

/**
 * برای نمونه: یک یوزر ثابت
 * اگر خواستی چند یوزر باشد یا از API بخوانی، همینجا تغییر بده.
 */
const DEMO_USER = {
  email: "admin@example.com",
  password: "123456"
};

function isLoggedIn() {
  return localStorage.getItem(AUTH_KEY) === "1";
}

function login(email, password) {
  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    localStorage.setItem(AUTH_KEY, "1");
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
}
