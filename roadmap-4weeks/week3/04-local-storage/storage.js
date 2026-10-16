// storage.ts
function loadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) {
      return fallback;
    }
    return JSON.parse(raw);
  } catch (error) {
    console.warn(`[Storage] ข้อมูลที่คีย์ "${key}" เสียหาย ระบบดึงค่าสำรองมาใช้แทน`);
    return fallback;
  }
}
localStorage.setItem("bad_key", "{ ข้อมูลพังยับเยิน... ");
var safeUser = loadStorage("bad_key", { id: 0, name: "Guest" });
console.log("ผลลัพธ์ที่ได้ (เว็บไม่พัง):", safeUser);
console.log("ชื่อผู้ใช้:", safeUser.name);
var inputEl = document.getElementById("name-input");
var btnSave = document.getElementById("btn-save");
var btnclear = document.getElementById("btn-clear");
var greet = document.getElementById("greeting");
function saveStorage(key, value) {
  try {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
    return true;
  } catch (error) {
    console.error(`เซฟคีย์"${key}" ไม่สำเร็จ!`, error);
    return false;
  }
}
var name = loadStorage("saved_name", "คนแปลกหน้า");
greet.textContent = `สวัสดีคุณ: ${name}`;
btnSave.addEventListener("click", () => {
  const rawNew = inputEl.value;
  if (rawNew) {
    saveStorage("saved_name", rawNew);
    greet.textContent = `สวัสดีคุณ: ${rawNew}`;
    inputEl.value = "";
  }
});
btnclear.addEventListener("click", () => {
  localStorage.removeItem("saved_name");
  greet.textContent = `สวัสดีคุณ:  คนแปลกหน้า`;
});
