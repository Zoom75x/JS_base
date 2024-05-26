//Задача2
//Реализуйте функцию findMax(num1, num2), которая возвращает большее из двух чисел.

function findMax(num1, num2) {
    if(!num1 && !num2){
        return "Введите значения аргументов"
    }
    if(num1===num2) {
        return "Введенные значения равны"
    }
    if(num1>num2){
        return num1
    } else {
        return num2
    }
}

findMax()
module.exports = {findMax}
