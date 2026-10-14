// app.ts
var btnSucces = document.getElementById("btn-success");
var btnError = document.getElementById("btn-error");
var loadingEl = document.getElementById("loading");
var errorEl = document.getElementById("error");
var successEl = document.getElementById("success");
var errorMsgEl = document.getElementById("error-msg");
var prodImgEl = document.getElementById("prod-img");
var prodTitleEl = document.getElementById("prod-title");
var prodPriceEl = document.getElementById("prod-price");
function setUIState(state, data, errorMsg) {
  loadingEl.classList.add("hidden");
  errorEl.classList.add("hidden");
  successEl.classList.add("hidden");
  if (state === "loading") {
    loadingEl.classList.remove("hidden");
    btnSucces.disabled = true;
    btnError.disabled = true;
  } else if (state === "error") {
    errorEl.classList.remove("hidden");
    errorMsgEl.textContent = errorMsg || "เกิดข้อผิดพลาดในการโหลด";
    btnSucces.disabled = false;
    btnError.disabled = false;
  } else if (state === "success") {
    successEl.classList.remove("hidden");
    if (data) {
      prodImgEl.src = data?.thumbnail;
      prodTitleEl.textContent = data.title;
      prodPriceEl.textContent = `$${data.price}`;
    }
    btnSucces.disabled = false;
    btnError.disabled = false;
  }
}
async function loadProduct(id) {
  try {
    setUIState("loading");
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`โหลดสินค้าไม่สำเร็จ รหัสสถานะ: ${response.status}`);
    }
    const data = await response.json();
    setUIState("success", data);
  } catch (error) {
    setUIState("error", undefined, error instanceof Error ? error.message : "เกิดข้อผิดพลาด");
  }
}
btnSucces.addEventListener("click", () => loadProduct(1));
btnError.addEventListener("click", () => loadProduct(999999));
