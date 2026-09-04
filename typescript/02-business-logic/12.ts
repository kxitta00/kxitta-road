// 15/7 กรองราคาสินค้าหลังหักส่วนลด 10%

let setProduct: number[] = [80, 110, 150, 90,] //เก็บราคาสินค้าตั้งต้น

function calculateDiscountedPrice(productprice: number[]): number[] {
    let productAfterDiscount: number[] = []; //เก็บราคาหลังจากเสร็จทุกขั้นตอน
    //ลูปลดราคา เช็คราคา
    for (const discount of productprice) {
        const discounted = discount * 0.9
        if (discounted < 100) {
            productAfterDiscount.push(discounted)
        }
    }

    return productAfterDiscount
}

let outputTest = calculateDiscountedPrice(setProduct)
console.log(outputTest)
