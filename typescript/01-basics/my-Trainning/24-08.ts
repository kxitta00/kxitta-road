const fruit = ["apple", "banana", "apple", "orange", "banana", "apple", "mango"];
const result: Record<string, number> = {};

for (const f of fruit) {
  if (!result[f]) {
    result[f] = 0
  }
  result[f] += 1
}

console.log(result)