///1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    function culc (a, b){
        let result = a * b;
        console.log(result);
    }
    culc ( 5, 8);
    culc(4, 3);

//2 - створити функцію яка обчислює та повертає площу кола з радіусом r

    function circle (radius){
        let result = 3.14 * (radius * radius);
        console.log(result);
    }
    circle(6);
    circle(13);

//3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

    function cylinder (radius, height){
        let result = 2 * 3.14 * radius * height
        console.log(result)
    }
    cylinder(5, 13)

//4 - створити функцію яка приймає масив та виводить кожен його елемент

    let array = [45, 7, 398, 'array', true];
    function arr (array){
        for (const arrayElement of array) {
            console.log(arrayElement)
        }
    }
    arr(array);

//5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

    function writer (text){
        `<p> ${text}</p>`
        console.log(text)
    }
    writer('It is my text !');

//6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    function createUl (lishki) {
        for (let i = 0; i < 3; i++) {
        document.write(
            `<ul>
                <li> ${lishki} </li>
             </ul>`)
            console.log(lishki);
        }
    }
    createUl('My function!!!!!')

//7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

    function newFunc (text, numbersLi) {
        for (let j = 0; j < numbersLi; j++) {
            document.write(`<ul>
                <li> ${text} </li>
             </ul>`)
        }
    }
     newFunc('Text text text', 5)

//8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

    let newArray = [18, 5, 8, 'monday', 'okten', true, false]
    function list (array) {
        for (const arrayElement of newArray) {
            document.write(`<ul>
                <li>${arrayElement}</li>
            </ul>`)
            console.log(arrayElement);
        }
    }
    list(newArray)

//9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

    let userArr = [
        {
            id: 1,
            name:'Anna',
            age: 18
        },
        {
            id: 2,
            name:'Tom',
            age: 67
        },
        {
            id: 3,
            name:'Den',
            age: 25
        }

    ]
    function user (arr) {
        for (const arrElement of userArr) {
                document.write(
                    `<div>
                   ${arrElement.id} ${arrElement.name} ${arrElement.age} 
                </div>`
                )
                console.log(arrElement);
            }
        }
    user(userArr)

//10 - створити функцію яка повертає найменьше число з масиву

    let numbers = [4, 7, 8, 5, 2, 1, 9, -5, 8, -1]
    function returns (arr){
        let min = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min){
                 min = arr[i];
            }
        }
        return min;
    }

    console.log(returns(numbers))

//11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

    let arrayNew = [1,2,10]
    function sum(arr){
        let resultArr = arr[0] + arr[1] + arr[2]
        console.log(resultArr)
    }
    sum(arrayNew)

//12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
    function swap (arr, index1, index2){
        let newInd = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = newInd
        return arr;
    }

    console.log(swap([11, 22, 33, 44], 0, 1));

//13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
    function exchange (sumUAH,currencyValues,exchangeCurrency){
        for (const elements of currencyValues) {
            let money = sumUAH/ elements.value
            if (elements.currency === exchangeCurrency){
                return money;
            }
        }
    }
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));








