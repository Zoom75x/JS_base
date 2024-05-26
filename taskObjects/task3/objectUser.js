//Задача 3: Изменение объекта
//Описание: Дан объект user с свойствами name и email.
// Напишите функцию updateEmail(user, newEmail), которая обновляет адрес электронной почты пользователя.

let user={
    name: "Ivan",
    email: "123@mail.ru"
}
console.log(user)

const updateEmail=(user, newEmail)=>{
    user.email=newEmail
    return user
}
console.log(updateEmail(user,"789@mail.ru"))