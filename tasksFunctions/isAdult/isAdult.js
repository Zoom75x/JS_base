//Напишите функцию isAdult(age), которая принимает возраст как аргумент и возвращает true, если возраст 18 и больше,
// и false в противном случае.
function isAdult(age) {
    if(!age && age!==0) {
        return "Значение не введено"
    }
    if(age<=0){
        return "Значение возраста может быть только положительным числом"
    }

    if(age>=18) {
        console.log("Доступ разрешен")
        return true
    }
        else {
        console.log("Доступ закрыт")
        return false
    }
}

console.log(isAdult(19));
module.exports={isAdult}