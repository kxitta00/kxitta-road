const studentGrades = ["A", "B", "A", "C", "B", "A", "F", "B"];

function countGrades(grades: string[]): Record<string, number> {
  const count: Record<string, number> = {};
  for (const g of grades) {
    if (!count[g]) {
      count[g] = 0;
    }
    count[g] += 1;
  }

  return count;
}

console.log(countGrades(studentGrades))