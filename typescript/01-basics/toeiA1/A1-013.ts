// เขียนโปรแกรมเพื่ออ่านตัวอักษรหนึ่งตัวและตัวเลขหนึ่งตัวจากแป้นพิมพ์และตรวจสอบรหัสผิด
// ข้อมูลถูก H 4567
let userName: string = String(prompt("Username:"));
let passWord: number = Number(prompt("Password:"));

if (userName === "H") {
    if (passWord === 4567) {
        console.log("safe unlocked")
    } else {
        console.log("safe locked - change digit")
    }
} else {
    if (passWord === 4567) {
        console.log("safe locked - change char")
    } else {
        console.log("safe locked")
    }
}