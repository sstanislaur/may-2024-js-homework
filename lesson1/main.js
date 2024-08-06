// strings
let text1 = 'hello';
let text2 = 'owu';
let text3 = 'com';
let text4 = 'ua';
let result = `${text1} ${text2} ${text3} ${text4}`;
console.log(result);

// number
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let result2 = `${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7}`;
console.log(result2);

// boolean
let boolean = true;
let boolean2 = false;
let result3 = `${boolean} ${boolean2}`;
console.log(result3);


let fistName = 'Stas';
let middleName = 'Lisnychuk';
let lastName = 'Mykolayovich';
let person = `${fistName} ${middleName} ${lastName}`;
console.log(person);


// typeof
let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// prompt
let name = prompt("Введіть ваше ім'я:");
let middleName2 = prompt("Введіть ваше по батькові:");
let age = prompt("Введіть ваш вік:");

console.log("Ім'я: " + name);
console.log("По батькові: " + middleName2);
console.log("Вік: " + age);