let firstName: string = prompt("") + '';
let lastName: string = prompt("") + '';
console.log(`Hello ${firstName} ${lastName}`);

let nickName: string = firstName.substring(0, 2) + lastName.substring(0, 2);
console.log(nickName)

