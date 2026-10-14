
async function fetchProduct() { //ใส่ async ไว้หน้า function ดึงข้อมูลเสมอเพื่อที่จะได้ใช้ await ได้
  //ใช้  try catch เพื่อดักการดึงข้อมูลที่ไม่มีจริงหรือเกิดข้อผิดพลาดอะไรต่างๆ
  try {
    const response = await fetch("https://dummyjson.com/products/999999"); //ดึงข้อมูลจาก api โดยใช้ await เพื่อรอ fetch ดึงข้อมูลมาเก็บไว้ในตัวแปร respon

    // เกราะชั้นที่ 1: ตรวจสอบ HTTP Status (ดัก 404, 500)
    if (!response.ok) { //ดักข้อมูลถ้า .ok เป็น falsh โยน error
      throw new Error(`โหลดสินค้าไม่สำเร็จ รหัสสถานะ: ${response.status}`);
    }
    //แล้วข้ามส่วนนี้เพราะไม่มีข้อมูลมา
    const data = await response.json();
    console.log("ข้อมูลสินค้า:", data.title)
    // เกราะชั้นที่ 2: ดักจับ Error ทุกรูปแบบ (ทั้ง 404 ที่เราโยนมา และกรณีเน็ตหลุด)
    //และข้ามมาเข้า catch
  } catch (error) {
    console.error("ระบบทำงานผิดพลาดอย่างปลอดภัย:", error);
  }
}

fetchProduct()