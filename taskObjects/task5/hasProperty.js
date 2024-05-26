//Задача 5: Проверка наличия свойства
// Описание: Создайте функцию hasProperty(obj, property),
// которая проверяет, существует ли заданное свойство в объекте.


let user={
    id: "234",
    name:"Ivan",
    age: 100
}
const hasProperty=(obj, property)=>{
    console.log(property in obj)
    if (!(property in obj)) {
        return "такого свойства в объекте нет"
    } else {
        return "такое свойство в объекте есть"
    }
}

console.log(hasProperty(user, "id"))
console.log(hasProperty(user, "123"))



