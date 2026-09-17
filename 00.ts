import { countTrue } from "./index"


const bools: boolean[] = [true, false, true, true, false];
const trueCount: number = countTrue(bools)
console.log("Number of true values: " + trueCount);

