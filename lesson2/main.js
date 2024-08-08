// Arrays and object

let array = [1, 'lorem', true, 25, 'ipsum', 100, -200, false, 0, 'lorem ipsum'];
console.log(array);

let book = {
    title: 'Harry Potter',
    pageCount: 200,
    genre: 'fantastic'
};
console.log(book);

let book2 = {
    title: 'Harry Potter',
    pageCount: 200,
    genre: 'fantastic',
    authors: [
        {
            name: 'J.K Rowling',
            age: 59
        }
    ]
};
console.log(book2);

let book3 = {
    title: 'Shadows of Forgotten Ancestors',
    pageCount: 256,
    genre: 'classic',
    authors: [
        {
            name: 'Mykhailo Kotsyubynskyi',
            age: 49
        }
    ]
};
console.log(book3);

let book4 = {
    title: 'The Master and Margarita',
    pageCount: 528,
    genre: 'fantastic',
    authors: [
        {
            name: 'Mykhailo Bulgakov',
            age: 49
        }
    ]
};
console.log(book4);

let user = [
    {name: 'vasya', username: 'vasyl123', password: 'vasya321'},
    {name: 'vasya', username: 'vasyl123', password: 'vasya231'},
    {name: 'vasya', username: 'vasyl123', password: 'vasya121'},
    {name: 'vasya', username: 'vasyl123', password: 'vasya521'},
    {name: 'vasya', username: 'vasyl123', password: 'vasya621'},
    {name: 'vasya', username: 'vasyl123', password: 'vasya721'},
    {name: 'vasya', username: 'vasyl123', password: 'vasya921'},
    {name: 'vasya', username: 'vasyl123', password: 'vasya821'},
    {name: 'vasya', username: 'vasyl123', password: 'vasya351'},
    {name: 'vasya', username: 'vasyl123', password: 'vasya331'}
];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);


const temp = [
    {morning: 18, day: 25, evening: 20},
    {morning: 17, day: 24, evening: 19},
    {morning: 19, day: 26, evening: 21},
    {morning: 16, day: 23, evening: 18},
    {morning: 20, day: 27, evening: 22},
    {morning: 18, day: 25, evening: 20},
    {morning: 17, day: 24, evening: 19},
];
console.log(temp);


// Logical  ramifications

let x = 0;

if (x != 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");

}
if (x != 1) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}
if (x != -3) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}


let time = prompt('enter time');

if (time >= 0 && time < 15) {
    console.log("Перша чверть години");
} else if (time >= 15 && time < 30) {
    console.log("Друга чверть години");
} else if (time >= 30 && time < 45) {
    console.log("Третя чверть години");
} else if (time >= 45 && time < 59) {
    console.log("Четверта чверть години");
} else {
    console.log("Некоректне значення");
}

let day = prompt('enter day');

if (day >= 1 && day <= 10) {
    console.log("Перша декада");
} else if (day >= 11 && day <= 20) {
    console.log("Друга декада");
} else if (day >= 21 && day <= 31) {
    console.log("Третя декада");
} else {
    console.log("Некоректне значення");
}

let dayOfWeek = +prompt('enter day of week');

switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Некоректне значення");
        break;
}

let num1 = prompt('num one');
let num2 = prompt('num two');

if (num1 > num2) {
    console.log("Максимальне число: " + num1);
} else if (num2 > num1) {
    console.log("Максимальне число: " + num2);
} else {
    console.log("Числа рівні: " + num1);
}


let s = 0;

s = s || "default";

console.log(s);


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log(coursesAndDurationArray[i].title + " - Супер");
    }
}