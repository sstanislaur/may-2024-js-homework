function square(a, b) {
    let c = a * b;
    return c
}

let result = square(20, 40);
console.log(result);

////////////////////////////////////////////////

function roundSquare(r) {
    return Math.PI * r * r
}

let area = roundSquare(5);
console.log(area);

////////////////////////////////////////////////

function cylinderSquare(radius, height) {
    return 2 * Math.PI * radius * height
}

let cylsquar = cylinderSquare(20, 40)
console.log(cylsquar)

////////////////////////////////////////////////

let array = [123, 'lorem', true];

function arrayElement(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

arrayElement(array)

////////////////////////////////////////////////

function text(asd) {
    document.write(`<p>${asd}</p>`);
}

text('hello');

////////////////////////////////////////////////

function foobar(text) {
    document.write(`
                    <ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>
    `);
}

foobar('hello world')

////////////////////////////////////////////////

function text1(foo, content) {
    document.write(`<ul>`);
    for (let i = 0; i < content; i++) {
        document.write(`<li>${foo}</li>`);
    }
    document.write(`</ul>`);
}

text1('lorem', 10);

////////////////////////////////////////////////

function text2(array) {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)

}

text2([123, 'lorem', true, false]);

////////////////////////////////////////////////

function array2(users) {
    for (const user of users) {
        document.write(`<div>id: ${user.id}, name: ${user.name}, age: ${user.age} </div>`);
    }
}

array2([
    {id: 1, name: 'vasya', age: 25},
    {id: 2, name: 'vasya', age: 25},
    {id: 3, name: 'vasya', age: 25},
    {id: 4, name: 'vasya', age: 25},
    {id: 5, name: 'vasya', age: 25},
    {id: 6, name: 'vasya', age: 25}
]);

////////////////////////////////////////////////

function number(num) {
    let min = num[0];
    for (const numElement of num) {
        if (numElement < min) {
            min = numElement
        }
    }
    return min;
}

console.log(number([123, 25, 32, -50, 12]));

////////////////////////////////////////////////

function sum(arr) {
    let a = 0
    for (const arrElement of arr) {
        a = a + arrElement
    }
    return a;
}

console.log(sum([5, 10, 20]));

////////////////////////////////////////////////

function swap(arr, index1, index2) {
    let one = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = one;
    return arr;
}

console.log(swap([11, 22, 33, 44], .0, 1));

////////////////////////////////////////////////

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }

    }
    let result = sumUAH / chosenCurrency.value
    return result;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));