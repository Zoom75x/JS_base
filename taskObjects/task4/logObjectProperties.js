//Задача 4: Перебор свойств объекта
// Описание: Напишите функцию logObjectProperties(obj),
// которая выводит в консоль ключ и значение каждого свойства объекта.

let user={
        id: "234",
        name:"Ivan",
        age: 100
        }


const logObjectProperties=(obj)=>{
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`)
    }
}

logObjectProperties(user)