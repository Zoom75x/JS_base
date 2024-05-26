//Задача11
//Создайте функцию isEven(number), которая возвращает true, если число четное, и false, если нечетное.

function isEven(number) {
    if (!number){
        return "Значение не введено"
    }
    if (number%2===0){
        return "true"
    } else {
        return "false"
    }
}
module.exports={isEven}