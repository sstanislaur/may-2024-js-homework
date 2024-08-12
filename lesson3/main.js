for (let i = 1; i <= 10; i++) {
    document.write(`<div>lorem ipsum </div>`);
}

for (let i = 1; i <= 10; i++) {
    document.write(`<div>lorem ipsum ${i}</div>`);
}

let a = 1;
while (a <= 20) {
    document.write(`<h1>lorem</h1>`);
    a++;
}

let b = 1;
while (b <= 20) {
    document.write(`<h1>lorem ${b}</h1>`);
    b++;
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write('</ul>');


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FOQEs5pJQfqk6J1fbzgQR&w=3840&q=75'
    },
];

for (let i = 0; i < products.length; i++) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${products[i].title}. PRICE - ${products[i].price}</h3>
            <img style="width: 100px" src="${products[i].image}" alt="${products[i].title}" class="product-image">
        </div>
    `);
}


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log("Користувачі зі статусом true:");
for (let user of users) {
    if (user.status === true) {
        console.log(user);
    }
}

console.log("Користувачі зі статусом false:");
for (let user of users) {
    if (user.status === false) {
        console.log(user);
    }
}

console.log("Користувачі, які старші 30 років:");
for (let user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}
