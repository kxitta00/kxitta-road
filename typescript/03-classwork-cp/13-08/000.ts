let inputString1: string = prompt("ชุดแรก:") + "";
let inputString2: string = prompt("ชุดสอง:") + "";
let inputString3: string = prompt("ชุดสาม:") + "";

function findString(x: string, y: string, z: string): string {


    if (x.length >= y.length && x.length >= z.length) {
        return x;
    } else if (y.length >= x.length && y.length >= z.length) {
        return y;
    } else {
        return z;
    }
}

console.log(findString(inputString1, inputString2, inputString3));