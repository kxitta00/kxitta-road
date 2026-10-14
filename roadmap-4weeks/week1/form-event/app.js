// app.ts
var userForm = document.getElementById("user-form");
var usernameInput = document.getElementById("username-input");
var roleSelect = document.getElementById("role-select");
var previewText = document.getElementById("preview-text");
var resultText = document.getElementById("result-text");
roleSelect.addEventListener("change", () => {
  previewText.textContent = `บทบาทที่เลือก: ${roleSelect.value}`;
});
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  resultText.textContent = `ผลลัพธ์การส่งฟอร์ม 
  ชื่อผู้ใช้: ${usernameInput.value} , บทบาท: ${roleSelect.value}`;
  userForm.reset();
});
