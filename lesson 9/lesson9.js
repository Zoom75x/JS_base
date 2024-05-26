// ОБЪЕКТЫ

// существует 2 способа создания объекта
let testUser=new Object()    // создание через конструктор


// второй способ - через литерал - это более частый способ создание объектов
let user={
    id: "1",
    name:"Bob",
    age: 25,
    isStudent: true,
    from: {
        city: "Krasnodar",
        street: "Krasnaya",
    },
}                  // создание через литерал объекта

//console.log(user, testUser)

//добавим новое свойство к объекту User
user.isAdmin=true   // если свойства нет то этой командой мы его создаем
//console.log(1, user)
user.isAdmin=false   // если свойство уже есть то этой командой мы его перезаписываем
//console.log(2, user)
//console.log("add user isAdmin", user)

//удаление свойства из объекта через метод delete

delete user.isAdmin
//console.log("delete user.isAdmin", user)


//если свойство содержит несколько слов - можно через нижнее подчеркивание между словами
// либо обернуть эти слова в кавычки like_birds "like birds"

user["like cat"]=false
//console.log(user)

// свойство можно задать в виде функции
user.sayHello=function () {
    return "Hello"
}
//console.log(user.sayHello())   //вызываем функцию и она возвращает результат


//  еще преимущество квадратных скобок это возможность назначать новые переменные вместо свойств и через
//   эти переменные к ним обращаться

const key="age"
//console.log(user[key])  // равнозначно вызову user["age"]

// создадим функцию которая будет получать значение свойства по ключу
//const getValueByKey=(key)=>{
   // return user[key]
//}
//console.log(getValueByKey("name"))
//console.log(getValueByKey("from"))


//можно прокинуть параметром функции не ключ а сам объект и ключ
//поэтому перепишем функцию с аргументами
const getValueByKey=(obj,key)=>{    //такое обращение функции через аргументы позволяет жить ей самой по себе
    // и не зависеть от внешних обстоятельств
    return obj[key]
}
//console.log(getValueByKey(user,"name"))
//console.log(getValueByKey(user,"from"))


//создадим функцию которая создает и возвращает объект

const createObject=(key,value)=>{
    return{
        [key]:value
    }
}

//console.log(createObject("name", "Ivan"))


//создадим функцию которая принимает два аргумента в виде свойств объекта и возвращает объект
// в котором будут эти два свойства и сразу их величины(которые будут в аргументах)

const createObject2 = (name, age) =>{
    return {
        id:"1",
        name:name,  //если имя свойства берется из одной переменной то можно просто писать переменную
        age: age     // вместо name:name, можно написать просто name,
    }
}
//console.log(createObject2("Ivan", 43))

//если ключ отсутствует то получим undefined


//если такое поле существует и например его значение равно undefined
// то как проверить существует ли это свойcтво вообще

user.gender=undefined

console.log(user.gender)
// тогда используем оператор in

//console.log('gender' in user)
//console.log('gender25' in user)
//console.log(user)


///как перебрать все свойства объекта


const getAllValue=()=>{
    for (const key in user) {
        console.log(`${key}: ${user[key]}`)
    }
}
//getAllValue(user)

// КОПИРОВАНИЕ ОБЪЕКТОВ

copyUser = {}
const getCopyUser=()=>{
    for (const key in user){
        copyUser[key]=user[key]
    }
}
//getCopyUser()
Object.assign(copyUser, user)
copyUser.from.city="Moscow"


































































