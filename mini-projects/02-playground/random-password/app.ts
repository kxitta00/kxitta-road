

const btnEl = document.querySelector<HTMLButtonElement>(".btn");
const inputEl = document.getElementById("input") as HTMLInputElement
const copyIconEl = document.querySelector(".fa-copy");
const alertContEl = document.querySelector(".alert-container");

btnEl?.addEventListener("click", () => {
  createPassword()
})

copyIconEl?.addEventListener("click", () => {
  copyPassword()
  if (inputEl.value) {
    alertContEl?.classList.remove("active")
    setTimeout(() => {
      alertContEl?.classList.add
        ("active")
    }, 2000)
  }
})

function createPassword(): void {
  const chars: string = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength: number = 14;
  let password: string = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum: number = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);


  }
  inputEl.value = password
  alertContEl!.textContent = password + " copied!"
}

function copyPassword(): void {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999)
  navigator.clipboard.writeText(inputEl.value)

}

