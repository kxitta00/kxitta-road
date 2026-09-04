let cardNumber: string | null = (prompt(""));

if (cardNumber?.length === 13) {
    console.log("yes")
} else {
    console.log("no");
}