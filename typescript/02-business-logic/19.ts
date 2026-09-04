//17/7 "ระบบจำลองการยกเลิกสินค้าในตะกร้า" (Cart Rollback Simulator)

const shopCart: string[] = ["Shirt", "Shoes", "Hat"];

function removeItemFromCart(items: string[]): void {
    console.log("Starting rollback process...");
    for (let i = items.length - 1; i >= 0; i--) {
        console.log(`Removing '${items[i]}'... (Remaining items: ${i})`);
    }
    console.log("Rollback complete! Cart is now empty.")
}

removeItemFromCart(shopCart)