// app.ts
var btnSucces = document.getElementById("btn-success");
var btnError = document.getElementById("btn-error");
var loadEl = document.getElementById("loading");
var errorEl = document.getElementById("error");
var errorMsgEl = document.getElementById("error-msg");
var successEl = document.getElementById("success");
var userImg = document.getElementById("user-img");
var userName = document.getElementById("user-name");
var userEmail = document.getElementById("user-email");
function setUIState(state, data, errorMsg) {
  if (!loadEl || !errorEl || !successEl || !btnSucces || !btnError)
    return;
  loadEl.classList.add("hidden");
  errorEl.classList.add("hidden");
  successEl.classList.add("hidden");
  if (state === "loading") {
    loadEl.classList.remove("hidden");
    btnSucces.disabled = true;
    btnError.disabled = true;
  } else if (state === "error") {
    errorEl.classList.remove("hidden");
    errorMsgEl.textContent = errorMsg || "เกิดข้อผิดพลาด!!";
    btnSucces.disabled = false;
    btnError.disabled = false;
  } else if (state === "success") {
    successEl.classList.remove("hidden");
    if (data) {
      userImg.src = data.image;
      userName.textContent = `${data.firstName.toUpperCase()} ${data.lastName.toUpperCase()}`;
      userEmail.textContent = data.email;
    }
    btnSucces.disabled = false;
    btnError.disabled = false;
  }
}
async function loadUserProfile(id) {
  try {
    setUIState("loading");
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) {
      throw new Error(`โหลดข้อมูลผู้ใช้ไม่สำเร็จ รหัสสถานะ: ${res.status}`);
    }
    const data = await res.json();
    setUIState("success", data);
  } catch (error) {
    setUIState("error", undefined, error instanceof Error ? error.message : "เกิดข้อผิดพลาด!!");
  }
}
btnSucces.addEventListener("click", () => loadUserProfile(1));
btnError.addEventListener("click", () => loadUserProfile(999999));
