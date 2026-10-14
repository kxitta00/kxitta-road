const userForm = document.getElementById('user-form') as HTMLFormElement;
const usernameInput = document.getElementById('username-input') as HTMLInputElement;
const roleSelect = document.getElementById('role-select') as HTMLSelectElement;
const previewText = document.getElementById('preview-text') as HTMLParagraphElement;
const resultText = document.getElementById('result-text') as HTMLParagraphElement;

roleSelect.addEventListener('change', () => {
  previewText.textContent = `บทบาทที่เลือก: ${roleSelect.value}`
})

userForm.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();
  resultText.textContent = `ผลลัพธ์การส่งฟอร์ม 
  ชื่อผู้ใช้: ${usernameInput.value} , บทบาท: ${roleSelect.value}`;
  userForm.reset();
})
