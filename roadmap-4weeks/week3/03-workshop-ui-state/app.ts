import { type UserProfile } from "./types";

const btnSucces = document.getElementById('btn-success') as HTMLButtonElement;
const btnError = document.getElementById('btn-error') as HTMLButtonElement;

const loadEl = document.getElementById('loading') as HTMLElement;
const errorEl = document.getElementById('error') as HTMLElement;
const errorMsgEl = document.getElementById('error-msg') as HTMLParagraphElement;

const successEl = document.getElementById('success') as HTMLElement;
const userImg = document.getElementById('user-img') as HTMLImageElement;
const userName = document.getElementById('user-name') as HTMLElement;
const userEmail = document.getElementById('user-email') as HTMLElement;


function setUIState(state: 'loading' | 'error' | 'success', data?: UserProfile, errorMsg?: string): void {
  if (!loadEl || !errorEl || !successEl || !btnSucces || !btnError) return
  loadEl.classList.add('hidden')
  errorEl.classList.add('hidden')
  successEl.classList.add('hidden')

  if (state === "loading") {
    loadEl.classList.remove('hidden');
    btnSucces.disabled = true;
    btnError.disabled = true;
  } else if (state === "error") {
    errorEl.classList.remove('hidden');
    errorMsgEl.textContent = errorMsg || "เกิดข้อผิดพลาด!!";
    btnSucces.disabled = false;
    btnError.disabled = false;
  } else if (state === "success") {
    successEl.classList.remove('hidden');
    if (data) {
      userImg.src = data.image;
      userName.textContent = `${data.firstName.toUpperCase()} ${data.lastName.toUpperCase()}`;
      userEmail.textContent = data.email;
    }
    btnSucces.disabled = false;
    btnError.disabled = false;
  }
}


async function loadUserProfile(id: number) {
  try {
    setUIState('loading');
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) {
      throw new Error(`โหลดข้อมูลผู้ใช้ไม่สำเร็จ รหัสสถานะ: ${res.status}`)
    }
    const data = await res.json();
    setUIState('success', data)
  } catch (error) {
    setUIState('error', undefined, error instanceof Error ? error.message : "เกิดข้อผิดพลาด!!")
  }
}

btnSucces.addEventListener('click', () => loadUserProfile(1))
btnError.addEventListener('click', () => loadUserProfile(999999))
