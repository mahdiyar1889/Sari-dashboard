document.addEventListener("DOMContentLoaded", () => {

  const USER_EMAIL = "dashboard@parsparnoun.com";
  const USER_PASS  = "123456";
  const AUTH_KEY   = "logged";

  const loginPage = document.getElementById("loginPage");
  const introPage = document.getElementById("introPage");

  function show(page){
    loginPage.style.display = "none";
    introPage.style.display = "none";
    page.style.display = "flex";
  }

  function isLogged(){
    return localStorage.getItem(AUTH_KEY) === "1";
  }

  if(isLogged()) show(introPage);
  else show(loginPage);

  document.getElementById("loginForm").addEventListener("submit", e=>{
    e.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const pass  = passwordInput.value.trim();

    if(email === USER_EMAIL && pass === USER_PASS){
      localStorage.setItem(AUTH_KEY,"1");
      show(introPage);
    }else{
      loginError.textContent = "ایمیل یا رمز عبور اشتباه است";
    }
  });

  document.getElementById("logoutBtn").addEventListener("click", ()=>{
    localStorage.removeItem(AUTH_KEY);
    show(loginPage);
  });

  document.getElementById("introTitle").addEventListener("click", ()=>{
    alert("اینجا می‌توانی صفحه فهرست را باز کنی");
  });
});
