//Задача 6
//Даны три числа. Найти среднее из них.


function getAverageNumber(num1, num2, num3) {
    //Error

    if (isNotNumber(num1, "string") || isNotNumber(num2) || isNotNumber(num3)) {
        return "Error"
    }
    //123
    if (num1 < num2 && num2 < num3) {
        return num2
    }
    //132
    if (num1 < num3 && num3 < num2) {
        return num3
    }
    //213
    if (num1 > num2 && num1 < num3) {
        return num1
    }
    //231
    if (num1 < num2 && num1 > num3) {
        return num1
    }
    //321
    if (num2 < num1 && num2 > num3) {
        return num2
    }
    //312
    if (num3 < num1 && num3 > num2) {
        return num3
    }
}

module.exports = {getAverageNumber}