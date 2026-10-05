function hello(repeat: number, to: string): void {
  let text: string = "hello"
  let result: string = text;
  let index: number = 1;
  while (index < repeat) {
    result += text;
    index++
  }
  if (repeat === 0) {
    console.log(to + "!");
  } else {
    console.log(`${result} ${to}!`);
  }
}

hello(3, "a")