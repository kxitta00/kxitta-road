//26/7 📝 โจทย์: "ระบบสรุปยอดใบเสร็จรับเงิน" (Smart Receipt Summary)

interface Item {
    name: string;
    price: number;
    amount: number; //จำนวนที่ซื้อ
}

function summarizeReceipt(items: Item[]): string {

    if (items.length === 0) {
        return "No Items Purchased";
    }

    let totalItem = 0;
    let totalPrice = 0;
    let finalPrice = 0;

    for (const checkItems of items) {
        totalItem += checkItems.amount
        totalPrice += (checkItems.price) * checkItems.amount
    }

    if (totalPrice >= 500) {
        finalPrice = totalPrice - 50
    } else {
        finalPrice = totalPrice;
    }

    let itemsPrice = items[0]!.price;
    let bestNameItem = items[0]?.name;

    for (const findBestItem of items) {
        if (findBestItem.price > itemsPrice) {
            itemsPrice = findBestItem.price
            bestNameItem = findBestItem.name
        }
    }

    return (`Total Items : ${totalItem} Final Price: ${finalPrice} Top Item: ${bestNameItem}`)
}




const cart1: Item[] = [
    { name: "Pen", price: 20, amount: 3 },     // 60 บาท
    { name: "Bag", price: 450, amount: 1 },    // 450 บาท (แพงสุด)
    { name: "Notebook", price: 50, amount: 2 } // 100 บาท
];

console.log(summarizeReceipt(cart1));