//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з
// вашим об'єктом

    let name = document.getElementById('name')
    let surname = document.getElementById('surname')
    let age = document.getElementById('age')
    let form = document.getElementById('form')

    form.onsubmit = function (e){
        e.preventDefault();
        let div = document.createElement('div')
        div.innerText = `${name.value} ${surname.value} ${age.value}`
        document.body.appendChild(div)
    }

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

    window.onload = function () {
    let numberDiv = document.getElementsByClassName('number')[0]
    let number = localStorage.getItem('number')
    localStorage.setItem('number', numberDiv.textContent)
    if (number !== null){
        let numberNew =  parseInt(number) + 1
        localStorage.setItem('number', numberNew)
        numberDiv.textContent = numberNew
    }
    }

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати
// дом структуру під кожну сессію

    let newSession = JSON.parse(localStorage.getItem('sessions'))
    let sessions = [new Date()]
    sessions.push(newSession)
    localStorage.setItem('sessions', JSON.stringify(sessions))

//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

    let arr = []
    for (let i = 0; i < 100; i++) {
       let newobj = {
            id: i + 1,
            name: `object ${i + 1}`
        }
        arr.push(newobj)
    }

    let div = document.getElementById('elem')
        let newArr = arr.slice(0, 10)
    window.onload = function () {
        div.textContent = JSON.stringify(newArr)
        document.body.appendChild(div)

    }
    let next = document.getElementById('next')
    let prev = document.getElementById('prev')

    next.addEventListener('click', function (){
        newArr
    })
//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".

    let text = document.getElementById('text')
    let click = document.getElementById('click')

    click.addEventListener('click', function (){
        text.style.display = 'none'
    })

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

    let info = document.getElementById('info')
    let confirm = document.getElementById('confirm')
    confirm.addEventListener('click', function (){
            let newDiv = document.createElement('div')
            let newInfo = parseInt(info.value)
        if (newInfo < 18){
            newDiv.innerText = 'Your age is less than 18'
        }
        if (newInfo > 18){
            newDiv.innerText = 'Your age is more than 18'
        }
        if (newInfo === 18){
            newDiv.innerText = 'Your age is 18'
        }
        document.body.appendChild(newDiv)
    })

