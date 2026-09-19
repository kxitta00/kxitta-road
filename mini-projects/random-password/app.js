// app.ts
var btnEl = document.querySelector(".btn");
var inputEl = document.getElementById("input");
var copyIconEl = document.querySelector(".fa-copy");
var alertContEl = document.querySelector(".alert-container");
btnEl?.addEventListener("click", () => {
  createPassword();
});
copyIconEl?.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertContEl?.classList.remove("active");
    setTimeout(() => {
      alertContEl?.classList.add("active");
    }, 2000);
  }
});
function createPassword() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0;index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertContEl.textContent = password + " copied!";
}
function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
