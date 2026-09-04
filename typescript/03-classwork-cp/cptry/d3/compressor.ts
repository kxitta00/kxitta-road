let text = prompt("Enter Text: ") as string;

function compressString(text: string): void {
  let output: string = "";
  let count = 1;
  for (let i = 0; i < text.length; i++) {
    let textIndex = text[i];
    let textNext = text[i + 1]

    if (textIndex === textNext) {
      count++
    } else {
      output += `${count}${textIndex}`
      count = 1
    }
  }
  console.log(output);
}

compressString(text)