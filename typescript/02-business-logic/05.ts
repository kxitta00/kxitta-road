// FizzBuzz 12/7 / 03



function fizzBuzz(): void {
    let inputNumber: number = Number(prompt("Enter Number: ") ?? 0);
    if (isNaN(inputNumber) || inputNumber <= 0) {
        console.log("unknown");
    } else {
        for (let i = 1; i <= inputNumber; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i)
            }
        }
    }
}


fizzBuzz()