// โจทย์: "เครื่องคัดกรองคำหยาบ (Profanity Filter)"

// คำสั่ง: สร้างฟังก์ชันรับข้อความเข้ามา ถ้าในข้อความมีคำว่า "bad", "ugly", "stupid" (ไม่สนพิมพ์เล็ก/ใหญ่) ให้เซ็นเซอร์คำนั้นเป็น "***"
// ตัวอย่าง:
// filterWords("You are a BaD boy") ➡️ "You are a *** boy"
// filterWords("I am UGLY") ➡️ "I am ***"
// คำใบ้: ห้ามใช้ for ลูปไล่ตัวอักษร ให้ใช้ .replace() หรือ .replaceAll() ร่วมกับ Regex (ลองเสิร์ชหาดูนะ)

let input: string = prompt(":") + '';

function senserWord(word: string): string {
  let result = word
    .replace(/bad/ig, "***")
    .replace(/ugly/ig, "***")
    .replace(/stupid/ig, "***");

  return result;
}

console.log(senserWord(input));