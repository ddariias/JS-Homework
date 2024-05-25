//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

    function User(id, name, surname, email, phone){
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
    }
    let users =[];
    users.push(new User(1, 'Den', 'Ivanov', 'den111@gmail.com', +380987654321))
    users.push(new User(2, 'Ann', 'Smith', 'ann111@gmail.com', +380987654321))
    users.push(new User(5, 'Sergey', 'Brown', 'serg11@gmail.com', +380987654321))
    users.push(new User(3, 'Tom', 'Jason', 'tom111@gmail.com', +380987654321))
    users.push(new User(4, 'Ben', 'Clark', 'ben111@gmail.com', +380987654321))
    users.push(new User(6, 'Vita', 'Miller', 'vita111@gmail.com', +380987654321))
    users.push(new User(10, 'Sofi', 'Malen', 'sofii111@gmail.com', +380987654321))
    users.push(new User(7, 'Lara', 'Davis', 'lara111@gmail.com', +380987654321))
    users.push(new User(8, 'Ola', 'Jones', 'ola111@gmail.com', +380987654321))
    users.push(new User(9, 'Lisa', 'Tolen', 'lisa111@gmail.com', +380987654321))

    console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    let user = users.filter(value => value.id % 2 === 0)
    console.log(user);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

    let sortUser = users.sort((a,b) => a.id - b.id)
    console.log(sortUser);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

    class Client {
        constructor(id, name, surname , email, phone, order) {
            this.id = id;
            this.name = name;
            this.surname = surname
            this.email = email
            this.phone = phone
            this.order = order
        }
    }

    let client = [];
    client.push(new Client(1, 'Ivan', 'Petrenko', 'ivan.petrenko@example.com','+380631234567', ['Lenovo Laptop', 'Samsung ']))
    client.push(new Client(2, "Olena", "Kovalchuk", "olena.kovalchuk@example.com", "+380671234567", ["iPad Tablet", "Nokia", "HP Laptop", "JBL Speaker"]))
    client.push(new Client(3, "Andriy", "Shevchenko", "andriy.shevchenko@example.com", "+380991234567", ["LG TV", "Iphone"]))
    client.push(new Client(4, "Maria", "Gonchar", "maria.gonchar@example.com", "+380931234567", ["Samsung Refrigerator", 'Samsung', "Manfrotto Tripod"]))
    client.push(new Client(5, "Oleksandr", "Boyko", "oleksandr.boyko@example.com", "+380501234567", ["Canon Camera", 'Huawei']))
    client.push(new Client(6, "Dmytro", "Kravchenko", "dmytro.kravchenko@example.com", "+380661234567", ["HP Laptop", "Iphone"]))
    client.push(new Client(7, "Anna", "Tymoshenko", "anna.tymoshenko@example.com", "+380731234567", ["Sony PlayStation 5", "Nokia", "Sigma Lens"]))
    client.push(new Client(8, "Yaroslav", "Bondarenko", "yaroslav.bondarenko@example.com", "+380921234567", ["Asus Monitor"]))
    client.push(new Client(9, "Kateryna", "Ivashchenko", "kateryna.ivashchenko@example.com", "+380721234567", ["Dell Laptop", "Iphone"]))
    client.push(new Client(10, "Oleh", "Melnyk", "oleh.melnyk@example.com", "+380501234568", ["Acer Laptop", "Samsung"]))

    console.log(client)

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

    let sortClient= client.sort((a, b) => a.order.length - b.order.length)
    console.log(sortClient);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    function Car(model, maker, year, maxSpeed, engine){
        this.model = model
        this.maker = maker
        this.year = year
        this.speed = maxSpeed
        this.engine = engine
        this.drive = function (){
            return( `Їдемо зі швидкістю ${maxSpeed} км на годину`);
        }
        this.info = function (){
            return(`model: ${model}, maker: ${maker}, year: ${year}, speed: ${maxSpeed}, engine: ${engine}`);
        }
        this.increaseMaxSpeed = function (newSpeed){
            return (`model: ${model}, maker: ${maker}, year: ${year}, speed: ${maxSpeed = newSpeed}, engine: ${engine}`);
        }
        this.changeYear = function (newValue){
            return  (`model: ${model}, maker: ${maker}, year: ${year = newValue}, speed: ${maxSpeed}, engine: ${engine}`)
        }
        Car.prototype.addDriver = function (driver){
            this.driver = driver
            return this
        }
    }

    let myCar = new Car('GLS', 'Mercedes-Benz', 2021, 250, '3.0');
    console.log(myCar);
    console.log(myCar.drive());
    console.log(myCar.info());
    console.log(myCar.increaseMaxSpeed(300));
    console.log(myCar.changeYear(2019));
    console.log(myCar.addDriver({name: 'Vasya', age: 31}));

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    class Cars{
        constructor(model, maker, year, maxSpeed, engine) {
            this.model = model
            this.maker = maker
            this.year = year
            this.speed = maxSpeed
            this.engine = engine
        }
        drive (){
            return( `Їдемо зі швидкістю ${this.speed} км на годину`);
        }
        info (){
            return(`model: ${this.model}, maker: ${this.maker}, year: ${this.year}, speed: ${this.speed}, engine: ${this.engine}`);
        }
        increaseMaxSpeed (newSpeed){
            return (`model: ${this.model}, maker: ${this.maker}, year: ${this.year}, speed: ${this.speed = newSpeed}, engine: ${this.engine}`);
        }
        changeYear (newValue){
            return  (`model: ${this.model}, maker: ${this.maker}, year: ${this.year = newValue}, speed: ${this.speed}, engine: ${this.engine}`)
        }
        addDriver (driver){
            this.driver = driver;
                return this;
        }

    }

    let newCar = new Cars('GLS', 'Mercedes-Benz', 2021, 250, '3.0');
    console.log(newCar);
    console.log(newCar.drive());
    console.log(newCar.info());
    console.log(newCar.increaseMaxSpeed(300));
    console.log(newCar.changeYear(2019));
    console.log(newCar.addDriver({name: 'Vasya', age: 31}));

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

    class Cinderella {
        constructor(name, age, sizeFoot) {
            this.name = name
            this.age = age
            this.size = sizeFoot
        }
    }
    let cinderella = []
    cinderella.push(new Cinderella('Ann', 20, 36))
    cinderella.push(new Cinderella('Fodoris', 18, 38))
    cinderella.push(new Cinderella('Inna', 19, 37))
    cinderella.push(new Cinderella('Sofi', 24, 39))
    cinderella.push(new Cinderella('Linda', 20, 37))
    cinderella.push(new Cinderella('Fodoris', 18, 36))
    cinderella.push(new Cinderella('Kate', 16, 38))
    cinderella.push(new Cinderella('Alina', 19, 40))
    cinderella.push(new Cinderella('Dina', 18, 39))
    cinderella.push(new Cinderella('Isabela', 21, 36))
    console.log(cinderella);

    class Prince{
        constructor(name, age, shoeFound) {
            this.name = name
            this.age = age
            this.shoe = shoeFound
        }
        findCinderella (){
        for (const cinderellaElement of cinderella) {
            if (cinderellaElement.name === 'Fodoris' && cinderellaElement.age === 18 && this.shoe === cinderellaElement.size) {
                return cinderellaElement
                }
            }
        }
    }

    let prince = new Prince('Kolin', 25, 36)
    let findPrinces = prince.findCinderella(cinderella)
    console.log(findPrinces);

    let find = cinderella.find(value => value.name === 'Fodoris' && value.age === 18 && prince.shoe === value.size)
    console.log(find);

//- Через Array.prototype. створити власний foreach, filter, map

    Array.prototype.myForeach = function (callback){
        let arr = []
        for (let i = 0; i < this.length; i++) {
           return callback(this[i])
        }
    }

    let elements = [11, 22, 33, 44, 55, 66, 77, 88, 99]
    console.log(elements.myForeach(element => elements));

    Array.prototype.myFilter = function (callback){
        let array =[]
        for (const arrayElement of this) {
            if (arrayElement > 50){
                array.push(arrayElement)
            }
        } return array
    }
    console.log(elements.myFilter(element => elements));

    Array.prototype.myMap = function (callback){
        let newArr = []
        for (let i = 0; i < this.length; i++) {
            newArr.push(callback(this[i]))
        }
        return newArr
    }
    console.log(elements.myMap(element => element + 10));









