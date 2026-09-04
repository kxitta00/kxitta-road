//25/7 เช้าโจทย์: "ระบบตรวจสอบความปลอดภัยของรหัสผ่าน" (Password Strength Checker)

function checkPassword(password: string): string {
    if (password === "" || password === null) {
        return "eorro";
    }

    if (password.length < 6) {
        return "Too Short";
    }

    let hasUpper = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {

        if (password[i]! >= "A" && password[i]! <= "Z") {
            hasUpper = true;
        }
        if (password[i]! >= "0" && password[i]! <= "9") {
            hasNumber = true;
        }
    }

    if (hasUpper && hasNumber) {
        return "Strong";
    } else if (hasUpper || hasNumber) {
        return "Medium";
    } else {
        return "Weak";
    }
}

// console.log(checkPassword("abc"));       // ผลลัพธ์: Too Short
// console.log(checkPassword("hello1234")); // ผลลัพธ์: Medium (มีแค่ตัวเลข)
// console.log(checkPassword("HelloWord")); // ผลลัพธ์: Medium (มีแค่ตัวพิมพ์ใหญ่)
// console.log(checkPassword("Pass1234"));  // ผลลัพธ์: Strong (มีทั้งพิมพ์ใหญ่และตัวเลข)
console.log(checkPassword("password"));  // ผลลัพธ์: Weak (ไม่มีทั้งคู่)
