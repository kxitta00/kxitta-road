//🥊 ข้อที่ 1: แนว reverseTextWithSpaces (กลับด้านโดยรักษาตำแหน่งเครื่องหมาย)

// let inputStr: string = String(prompt("Enter Text: "));

// function reverseText(text: string): string {
//   let output = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     let alphabet = text[i];
//     if (alphabet === "-") {
//       output += "-"
//     } else {
//       output += alphabet
//     }
//   }
//   return output
// }

// console.log(reverseText(inputStr));

//ข้อที่ 2: แนว filterText (ตัวกรองข้อความหลากรูปแบบ)

const test = [
  { input: "Hello World", filterText: ["o"] },
  { input: "JavaScript", filterText: ["J", "a"] },
  { input: "Apple and APPLE", filterText: ["Apple"] }
]

function cleanMessage(text: string, ...banned: string[]): string {
  for (const b of banned) {
    if (b.length === 1) {
      text = text.replaceAll(b.toLowerCase(), "").replaceAll(b.toUpperCase(), "");
    } else {
      text = text.replaceAll(b, "");
    }
  }
  return text
}

test.forEach(({ input, filterText }) => {
  console.log(cleanMessage(input, ...filterText));
});
