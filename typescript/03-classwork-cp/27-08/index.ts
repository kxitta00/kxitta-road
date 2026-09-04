function BBBB(input: string[]): boolean {
  if (input.length === 0 || input.length % 2 !== 0) {
    return false;
  }

  const seen: string[] = [];

  for (const item of input) {
    if (seen.includes(item)) {
      return true; // ถ้าคำนี้เคยเจอมาแล้ว แสดงว่ามีคู่ซ้ำ!
    }
    seen.push(item);
  }

  return false;
}

// console.log(BBBB([]));
// console.log(BBBB(["20"]));
// console.log(BBBB(["20", "20"]));
console.log(BBBB(["20", "20", "13"]));
// console.log(BBBB(["20", "13"]));