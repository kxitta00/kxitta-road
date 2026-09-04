const text = "Hello World"

function reverseText(text: string): string {
  let output = '';
  for (let i = 0; i < text.length; i++) {
    let alphabet = text[i];
    if (alphabet === ' ') {
      continue
    } else {
      output = alphabet + output;
    }
  }
  return (`output: ${output}`);
}

console.log(reverseText(text));