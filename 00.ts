import { echo } from "./index";

function sumPositives(nums: number[]): number {
  let total: number = 0;
  let index: number = 0;
  const num_length: number = nums.length;
  while (index < num_length) {
    const num: number | undefined = nums[index];
    if (num !== undefined) {
      if (num > 0) {
        total = total + num
      }
    }
    index++
  }
  return total
}


const result: number = sumPositives([10, 20, 30])
console.log(`ผลลัพธ์ = ${result}`);
