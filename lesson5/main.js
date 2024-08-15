const square = (a, b) => a * b;

console.log(square(20, 40));

////////////////////////////////////////////////

const roundSquare = (r) => Math.PI * r * r;

console.log(roundSquare(10));

////////////////////////////////////////////////

const cylinderSquare = (radius, height) => 2 * Math.PI * radius * height;

console.log(cylinderSquare(40, 60));

////////////////////////////////////////////////

let array = [321, 'lorem', true];

const arrayElement = (arr) => {
    arr.forEach(element => console.log(element));
};

arrayElement(array);

////////////////////////////////////////////////

const text = (foobar) => {
    document.write(`<p>${foobar}</p>`);
};

text('hello');

////////////////////////////////////////////////

const foobar = (text) => {
    document.write(`
                    <ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>
    `);
};

foobar('hello world');

////////////////////////////////////////////////

const ulli = (foo, content) => {
    document.write(`<ul>`);
    for (let i = 0; i < content; i++) {
        document.write(`<li>${foo}</li>`);
    }
    document.write(`</ul>`);
}

ulli('lorem', 5);

////////////////////////////////////////////////

const arg = (array) => {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);

}

arg([123, 'lorem', true, false]);

////////////////////////////////////////////////

const arr = (users) => {
    for (const user of users) {
        document.write(`<div>id: ${user.id}, name: ${user.name}, age: ${user.age} </div>`);
    }
}

arr([
    {id: 1, name: 'vasya', age: 25},
    {id: 2, name: 'vasya', age: 26},
    {id: 3, name: 'vasya', age: 27},
    {id: 4, name: 'vasya', age: 28},
    {id: 5, name: 'vasya', age: 29},
    {id: 6, name: 'vasya', age: 30}
]);

////////////////////////////////////////////////

const number = (num) => {
    let min = num[0];
    for (const numElement of num) {
        if (numElement < min) {
            min = numElement
        }
    }
    return min;
}

console.log(number([123, 25, 32, -35, 12]));

////////////////////////////////////////////////

const sum = (arr) => {
    let a = 0
    for (const arrElement of arr) {
        a = a + arrElement
    }
    return a;
}

console.log(sum([5, 15, 25]));

////////////////////////////////////////////////

const swap = (arr, index1, index2) => {
    let one = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = one;
    return arr;
}

console.log(swap([11, 22, 33, 44], .0, 1));

////////////////////////////////////////////////

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    let result = sumUAH / chosenCurrency.value
    return result;
};

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));