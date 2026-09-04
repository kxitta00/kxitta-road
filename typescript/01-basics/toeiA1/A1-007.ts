// let inputABC: string | null = prompt("");

// if (inputABC === "a" || inputABC === "e" || inputABC === "i" || inputABC === "o" || inputABC === "u") {
// console.log("yes");
// } else {
// console.log("no");
// }

let inputABC: string | null = prompt("");

switch (inputABC) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("yes");
        break;
    default:
        console.log("no");
}