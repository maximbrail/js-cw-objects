let person = {
    name: 'Max',
    surname: 'Brailov',
    age: 14
}

person.age = 7846  
person.name = 'xaM'
person.surname = 'voliarB'
person.adress = 'Shahrisabz, 7'

person['name'] = 'Arbuz'
person['surname'] = 'Dinya'


let car = {
    brand: 'BMW',
    model: 'm5cs2',
    horsePower: 400,
    start: function(){
        console.log('Mashina zavoditsya');  
    }
}


car.horsePower = 1200
car.color = 'white'
delete car.model

// car.start()

// console.log(car);


let car2 = {...car}

// console.log(car2)


// console.log(person);


let company = {
    name: 'GitHub',
    owner: {
        name: 'Chris',
        surname: 'Wanstrath',
        networth: '2.2 bil',
        adress: {
            city: 'Chicago',
            street: 'Amir Temur'
        }
    }
}


company.owner.name = 'Max'
company.owner.surname = 'Brail'

let book = {
    title: 'Voyna and mir',
    author: 'Lev Tolstiy',
    year: 1867,
}

book.price = '10$'

let book2 = {...book}
book2.year = 2024
book2.price = '12$'


function print(obj) {
    for(let key in obj){
        console.log(`${key} : ${obj[key]}`);
    }
}

// print(book)

// console.log('----------------');

// print(book2)

// console.log(company);




let school = {
    name: '145 School',
    teachers: {
        math: 'Timofey Ivanov',
        geography: 'Larisa Mihaylovna',
        history: 'Fatima Shavkatovna'
    },
    students: {
    1: 'Vadim Cerov',
    2: 'Andrey Dibilov',
    3: 'Eldor Nuriddinov'
    },
    hasEatery: false,
    hasToilet: true,
    rooms: 160
}

console.log(school);



