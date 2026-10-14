import type { Product } from "./types";

const btnSucces = document.getElementById('btn-success') as HTMLButtonElement; //ดึงปุ่มมาเทสกรณีดึงข้อมูลสำเร็จ
const btnError = document.getElementById('btn-error') as HTMLButtonElement; //ดึงปุ่มมาเทสกรณีดึงข้อมูลไม่สำเร็จ

const loadingEl = document.getElementById('loading') as HTMLElement; //ดึง id loadingEl มา
const errorEl = document.getElementById('error') as HTMLElement; //ดึง id errorEl
const successEl = document.getElementById('success') as HTMLElement; //ดึง id successEl

const errorMsgEl = document.getElementById('error-msg') as HTMLElement;
const prodImgEl = document.getElementById('prod-img') as HTMLImageElement;
const prodTitleEl = document.getElementById('prod-title') as HTMLElement;
const prodPriceEl = document.getElementById('prod-price') as HTMLElement;


function setUIState(state: "loading" | "error" | "success", data?: Product, errorMsg?: string): void {
  loadingEl.classList.add("hidden");
  errorEl.classList.add("hidden");
  successEl.classList.add("hidden");

  if (state === "loading") {
    loadingEl.classList.remove("hidden");
    btnSucces.disabled = true;
    btnError.disabled = true;
  } else if (state === "error") {
    errorEl.classList.remove('hidden');
    errorMsgEl.textContent = errorMsg || "เกิดข้อผิดพลาดในการโหลด";
    btnSucces.disabled = false;
    btnError.disabled = false;
  } else if (state === "success") {
    successEl.classList.remove('hidden');
    if (data) {
      prodImgEl.src = data?.thumbnail;
      prodTitleEl.textContent = data.title;
      prodPriceEl.textContent = `$${data.price}`;
    }
    btnSucces.disabled = false;
    btnError.disabled = false;
  }
}

async function loadProduct(id: number) {
  try {
    setUIState("loading");
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`โหลดสินค้าไม่สำเร็จ รหัสสถานะ: ${response.status}`);
    }

    const data = await response.json();
    setUIState('success', data);


  } catch (error) {
    setUIState('error', undefined, error instanceof Error ? error.message : "เกิดข้อผิดพลาด")
  }
}

btnSucces.addEventListener('click', () => loadProduct(1));
btnError.addEventListener("click", () => loadProduct(999999));
