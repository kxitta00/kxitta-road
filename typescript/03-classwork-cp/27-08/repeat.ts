//ข้อที่1
// function CalculateVipCode(code: string): number {
//   let result: number = 0;
//   for (let i = 0; i < code.length; i++) {
//     let n: string = code[i]!;

//     if (("02468".includes(n))) {
//       result += 5
//     } else {
//       result -= 2
//     }
//   }
//   return result
// }

// console.log(CalculateVipCode("246"));


//ข้อ2

function HasDuplicateLuckyNumber(nums: number[]): boolean {
  if (nums.length === 0 || nums.length < 3)
    return false;

  const uniqueWords = new Set(nums);
  if (uniqueWords.size < nums.length)
    return true;

  return false
}


console.log(HasDuplicateLuckyNumber([1, 2, 3]));