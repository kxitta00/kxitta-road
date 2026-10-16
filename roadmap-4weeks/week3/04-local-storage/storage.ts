
function loadStorage<T>(key: string, fallback: T): T {
  try {

    const raw = localStorage.getItem(key); //นำข้อมูลจาก key มาเก็บไว้
    if (raw === null) { //เช็คว่าผู้ใช้เปิดเว็บครั้งแรกหรือไม่เคยเก็บอะไรไว้เลยมั้ย? ถ้าใช่คืน fallback
      return fallback;
    }

    return JSON.parse(raw) as T; //กรณีมีข้อมูลและแปลงสำเร็จก็จะคืนค่าข้อมูลออกไปแล้ว T จะเป็น type ตามข้อมูลที่แกะออกมา

    //กรณีแกะข้อมูลออกมาแล้วข้อมูลพังจะเข้าบรรทัดนี้ทัดนี้และคืนข้อมูลสำรอง
  } catch (error) {
    console.warn(`[Storage] ข้อมูลที่คีย์ "${key}" เสียหาย ระบบดึงค่าสำรองมาใช้แทน`);
    return fallback
  }
}

// จงใจสร้างข้อมูลขยะ
localStorage.setItem("bad_key", "{ ข้อมูลพังยับเยิน... ");
// ลองโหลดด้วยตาข่ายนิรภัย โดยกำหนดค่าสำรองเป็น { id: 0, name: "Guest" }
const safeUser = loadStorage("bad_key", { id: 0, name: "Guest" });
console.log("ผลลัพธ์ที่ได้ (เว็บไม่พัง):", safeUser);
console.log("ชื่อผู้ใช้:", safeUser.name);


const inputEl = document.getElementById('name-input') as HTMLInputElement;
const btnSave = document.getElementById('btn-save') as HTMLButtonElement;
const btnclear = document.getElementById('btn-clear') as HTMLButtonElement;
const greet = document.getElementById('greeting') as HTMLElement;


function saveStorage<T>(key: string, value: T): boolean {
  try {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
    return true
  } catch (error) {
    console.error(`เซฟคีย์"${key}" ไม่สำเร็จ!`, error);
    return false
  }
}

const name = loadStorage<string>('saved_name', "คนแปลกหน้า")
greet.textContent = `สวัสดีคุณ: ${name}`

btnSave.addEventListener('click', () => {
  const rawNew = inputEl.value;
  if (rawNew) {
    saveStorage("saved_name", rawNew);
    greet.textContent = `สวัสดีคุณ: ${rawNew}`
    inputEl.value = "";
  }

})


btnclear.addEventListener('click', () => {
  localStorage.removeItem("saved_name")
  greet.textContent = `สวัสดีคุณ:  คนแปลกหน้า`
})



