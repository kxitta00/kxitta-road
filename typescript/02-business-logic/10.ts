// 14/7 โจทย์ชดเชย 13/7
// ระบบกรองราคาสินค้าตามงบประมาณ

let totalItemsPrice: number[] = [120, 500, 80, 1500, 300];
let userMoney: number = 400;

function filterByBudget(itemPrice: number[], money: number): number[] {
    let sumProductCanBuy: number[] = []
    for (const checkPriceProduct of itemPrice) {
        if (money >= checkPriceProduct) {
            sumProductCanBuy.push(checkPriceProduct);
        }
    }
    return sumProductCanBuy
}

let outputShow = filterByBudget(totalItemsPrice, userMoney);
console.log(outputShow);