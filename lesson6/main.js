let a = 'hello world';
console.log(a.length);
let b = 'lorem ipsum';
console.log(b.length);
let c = 'javascript is cool';
console.log(c.length);

////////////////////////////////////////////////

let a1 = 'hello world';
const a2 = a1.toUpperCase();
console.log(a2);

let b1 = 'lorem ipsum';
const b2 = b1.toUpperCase();
console.log(b2);

let c1 = 'javascript is cool';
const c2 = c1.toUpperCase();
console.log(c2);

////////////////////////////////////////////////

let a3 = 'HELLO WORLD';
const a4 = a3.toLowerCase();
console.log(a4);

let b3 = 'LOREM IPSUM';
const b4 = b3.toLowerCase();
console.log(b4);

let c3 = 'JAVASCRIPT IS COOL';
const c4 = c3.toLowerCase();
console.log(c4);

////////////////////////////////////////////////

let str = ' dirty string   '
const n = str.trim();
console.log(n);

////////////////////////////////////////////////

const stringToArr = (str) => {
    if (str) {
        let split = str.split(' ');
        return split;
    }
    return [''];
}

console.log(stringToArr('Ревуть воли як ясла повні'));

////////////////////////////////////////////////

const num = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const string = num.map(number => number + '');
console.log(string);

////////////////////////////////////////////////

let nums = [11, 21, 3];

function sortNums(array, direction) {
    if (direction === 'asc') return array.sort((a, b) => a - b);
    if (direction === 'des') return array.sort((a, b) => b - a);

}

console.log(sortNums(nums, 'asc'));
console.log(sortNums(nums, 'des'));

////////////////////////////////////////////////

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const map = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = index + 1;
        return value;
    })

console.log(map);

////////////////////////////////////////////////

const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];


const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuits: suit, value: value}
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black'

        }
        cards.push(card)
    }
}
console.log(cards);

console.log(cards.find(card => card.value === 'ace' && card.cardSuits === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.cardSuits === 'diamond'));
console.log(cards.filter(card => card.cardSuits === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

////////////////////////////////////////////////

const reduce = cards.reduce((accum, card) => {
    switch (card.cardSuits) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
    }

    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);

////////////////////////////////////////////////

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));

console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));
