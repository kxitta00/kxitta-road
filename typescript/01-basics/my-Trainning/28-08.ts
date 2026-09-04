
type type = "food" | "electronic";

type item = {
  name: string,
  price: number,
  type: type,
}

type report = {
  totalBeforeDiscount: number,
  discountValue: number,
  netTotal: number,
}

const cart1: item[] = [
  { name: "หูฟังบลูทูธ", price: 1000, type: "electronic" },
  { name: "พิซซ่าถาดใหญ่", price: 500, type: "food" },
];

function smartCartCheckout(cart: item[]): report {
  if (cart.length === 0)
    return {
      totalBeforeDiscount: 0,
      discountValue: 0,
      netTotal: 0
    }

  let electronicPrice: number = 0;
  let totalBeforeDiscount: number = 0;
  let discountValue: number = 0
  let netTotal: number = 0;

  for (const item of cart) {
    if (item.type === "electronic") {
      electronicPrice += item.price
    } else {
      netTotal += item.price;
    }
  }
  totalBeforeDiscount = netTotal + electronicPrice;
  if (totalBeforeDiscount >= 1000) {
    discountValue = electronicPrice - (electronicPrice * 0.9)
    netTotal = totalBeforeDiscount - discountValue
  } else {
    totalBeforeDiscount = netTotal + electronicPrice
    discountValue = 0;
    netTotal = totalBeforeDiscount;
  }


  return {
    totalBeforeDiscount,
    discountValue,
    netTotal,
  }

}

console.log(smartCartCheckout(cart1));

