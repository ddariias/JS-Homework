//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

    let hello = 'hello world';
    let lorem = 'lorem ipsum';
    let java = 'javascript is cool';

    console.log(hello.length);
    console.log(lorem.length);
    console.log(java.length);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'

    console.log(hello.toUpperCase());
    console.log(lorem.toUpperCase());
    console.log(java.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

    let hellO = 'HELLO WORLD';
    let loreM = 'LOREM IPSUM';
    let javA = 'JAVASCRIPT IS COOL';

    console.log(hellO.toLowerCase());
    console.log(loreM.toLowerCase());
    console.log(javA.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

    let str = ' dirty string   '
    console.log(str.replaceAll(' ', ''))
    console.log(str.substring(1, 6) + ' ' + str.substring(7, 13));
    // console.log(str.length);
    // console.log(str.indexOf('y'));
    console.log(str.trim());

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

    let string = 'Ревуть воли як ясла повні';
    const stringToarray = (string) => string.split(' ')
    let arr = stringToarray(string);
    console.log(arr);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

    const number = [10,8,-7,55,987,-1011,0,1050,0];
    console.log(number.map((number =>{
        return number + '';
    })));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

    let nums = [11,21,3]
    const sortNums = (numsN, direction) => {
        for (const numsNElement of numsN) {
            if (direction === 'ascending') {
                nums.sort((a, b) => a - b)
                return nums;
            }else if (direction === 'descending'){
                nums.sort((a, b) => b - a)
                return nums
            }
        }
    }

    console.log(sortNums(nums, 'ascending'));
    console.log(sortNums(nums, 'descending'));

//==========================
//- є масив

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

//-- відсортувати його за спаданням за monthDuration
    const sorting = (coursesAndDurationArray) => coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
    console.log(sorting(coursesAndDurationArray));

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

    console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

    console.log(coursesAndDurationArray.map((value, index, array) => {
        return {...value, id: index + 1}}));

// =========================
//  описати колоду карт (від 6 до туза без джокерів)

    let cards = {
        cardSuit: ['spades', 'diamonds', 'hearts', 'clubs'],
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: ['red', 'black']
    };

    cards = cards.cardSuit.reduce((arr, card) => {
        cards.value.forEach(item => {
            let color = (card === 'diamonds' || card === 'hearts') ? 'red' : 'black';
            arr.push({
                cardSuit: card,
                value: item,
                color: color
            });
        });
        return arr;
    }, []);

    console.log(cards);

// - знайти піковий туз

    let spadesAce = cards.find(card => card.value === 'ace' && card.cardSuit === 'spades')
    console.log(spadesAce);

// - всі шістки

    let six = cards.filter(obj => obj.value === '6')
    console.log(six);

// - всі червоні карти

    let red = cards.filter(value => value.color === 'red')
    console.log(red);

// - всі буби

    let diamonds = cards.filter(value => value.cardSuit === 'diamonds')
    console.log(diamonds);
// - всі трефи від 9 та більше

    let clubs = cards.filter(value => value.value >= '9' && value.cardSuit === 'clubs')
    console.log(clubs);

// =========================
//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

     let reduser = function (acc, item){
        if (item){
            acc.spades.push(item)
            acc.diamonds.push(item)
            acc.spades.push(item)
            acc.spades.push(item)
        }return acc;
     }
console.log(cards.reduce(reduser, {
    spades: [], diamonds: [], hearts: [], clubs: []
}));

//=========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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

// --написати пошук всіх об'єктів, в який в modules є sass

    const searchSass = (array) => array.filter((value,index) => value.modules.includes('sass'))
    console.log(searchSass(coursesArray));


// --написати пошук всіх об'єктів, в який в modules є docker

    const searchDocker = (array) => array.filter((value,index) => value.modules.includes('docker'))
    console.log(searchDocker(coursesArray));












