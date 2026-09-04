let inputText: string = prompt("") + "";

function maskSecretKeywords(text: string): void {
  console.log(text.replace(/secret|password|admin/ig, "[CONFIDENTIAL]"))
}

maskSecretKeywords(inputText)