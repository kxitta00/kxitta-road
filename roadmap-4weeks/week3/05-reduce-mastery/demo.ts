// const numbers = [10, 20, 30, 40];

// const total = numbers.reduce((acc, curr) => {
//   console.log(`รอบปัจจุบัน: acc = ${acc}, curr = ${curr}`);
//   return acc + curr;

// }, 0)

// console.log("ผลรวมสุดท้าย:", total);

// const scores = [45, 92, 18, 88, 95, 73];

// const highestScore = scores.reduce((max, curr) => {
//   if (curr > max) {
//     return curr
//   } else {
//     return max
//   }
// }, 0);

// console.log("คะแนนสูงสุด:", highestScore);

// interface Expense {
//   title: string;
//   amount: number;
// }

// const expenses: Expense[] = [
//   { title: "ข้าวมันไก่", amount: 50 },
//   { title: "กาแฟ", amount: 65 },
//   { title: "ค่ารถไฟ", amount: 40 },
// ];

// const total = expenses.reduce((acc, curr) => {
//   const num = curr.amount;
//   return acc + num

// }, 0);

// console.log(total);

// interface Expense {
//   id: number;
//   category: "Food" | "Transport" | "Entertainment";
//   amount: number;
// }

// const expenses: Expense[] = [
//   { id: 1, category: "Food", amount: 50 },
//   { id: 2, category: "Transport", amount: 40 },
//   { id: 3, category: "Food", amount: 120 },
//   { id: 4, category: "Entertainment", amount: 300 },
//   { id: 5, category: "Transport", amount: 60 },
// ];

// const total = expenses.reduce((acc, curr) => { return acc + curr.amount }, 0);
// console.log(total);


interface ExpenseItem {
  id: number;
  title: string;
  category: "Food" | "Transport" | "Entertainment";
  amount: number;
}

const transactions: ExpenseItem[] = [
  { id: 1, title: "ข้าวมันไก่", category: "Food", amount: 50 },
  { id: 2, title: "BTS", category: "Transport", amount: 45 },
  { id: 3, title: "ส้มตำ", category: "Food", amount: 120 },
  { id: 4, title: "ตั๋วหนัง", category: "Entertainment", amount: 260 },
  { id: 5, title: "MRT", category: "Transport", amount: 35 },
];

// const totalFood = transactions.reduce((acc, curr) => {
//   return curr.category === "Food" ? acc + curr.amount : acc
// }, 0)

// const totalTran = transactions.reduce((acc, curr) => {
//   return curr.category === "Transport" ? acc + curr.amount : acc
// }, 0)

// const totalEnter = transactions.reduce((acc, curr) => {
//   return curr.category === "Entertainment" ? acc + curr.amount : acc
// }, 0)

// console.log({
//   Food: totalFood,
//   Transport: totalTran,
//   Entertaiment: totalEnter,
// });

// const summary = transactions.reduce((acc, curr) => {
//   const category = curr.category;

//   if (!acc[category]) {
//     acc[category] = 0;
//   }
//   acc[category] += curr.amount;
//   return acc
// }, {} as Record<string, number>);

const nums: number[] = [];
const sum = nums.reduce((acc, curr) => acc + curr);

console.log(sum);
