// УСЛОВНЫЙ   ОПЕРАТОР

//if, else if, else

/*function getResult(param){
    console.log("Функция запустилась со значением", param)
    if (param){
        console.log("Значение истинно")
    }
    console.log("*------------*")
}
getResult(true)
getResult(false)
getResult(0)
getResult(-0)
getResult(NaN)
getResult(1)
getResult("1")
getResult([])*/

// if else

/*function getResult1(num1,num2,znak){
    console.log("Функция getResult1 start", znak)
    if (znak==="-"){
        return num1-num2
    }
    if (znak==="+") {
        return num1+num2
    } else console.log("Знак не известен")
    console.log("Функция getResult11 stop")
}
getResult1(5,5,"-")*/

// if else, if else


/*function getResult2(num1,num2,znak){
    console.log("Функция getResult2 start", znak)
    if (znak==="-"){
        console.log(num1-num2)
    } else if (znak==="+") {
        console.log(num1+num2)
    } else console.log("Знак не известен")
    console.log("Функция getResult2 stop \n")
}
getResult2(5,5,"-")
getResult2(5,5,"+")
getResult2(5,5,"*")*/


function getResult3(num1,num2,znak) {
    if (znak==="+"){
        return num1+num2
    }
}



//Задача1
// Напишите функцию isAdult(age), которая принимает возраст как аргумент и возвращает true,
// если возраст 18 и больше, и false в противном случае.
function isAdult(age) {
    if (!age){
        return "Error404"
    }
    if (age<0){
        return "Error1"
    }
    if (typeof age!== "Number"){
        return "Error2"
    }
    if (age>=18){
        return true
    } else {
        return false
    }
}


//Задача2
// Реализуйте функцию findMax(num1, num2), которая возвращает большее из двух чисел.
function findMax(num1, num2) {
    if (num1=num2) {
        return "Введенные значения равны"
    }
    if (typeof num1 || num2 !== "number"){
        return "Сравниваемые значения должны быть числами"
    }
    if (num1>num2) {
        return "num1"
    }
        else{
        return "num2"
        }

}

//Задача3
// Создайте функцию convertScoreToGrade(score) для преобразования числового балла в буквенную оценку.
function convertScoreToGrade(score) {
    if (score=2) {
        return "D"
    }
    if (score=3) {
        return "C"
    }
    if (score=4) {
        return "B"
    }
    if (score=5) {
        return "A"
    }
    if (typeof score !== "number" || score>5 || score<2){
        return "Введите число от 2 до 5"
    }

}

//Задача4
// Переменная n хранит целое число от 0 до 9. Используя оператор if esle,
// написать скрипт, который в зависимости от числа будет выводить слово
// (Например, если n равно 3, то будет выводиться слово «три»)
function convertGradeToScore(grade) {
    if (grade=0) {
        return "zero"
    }
    if (grade=1) {
        return "one"
    }
    if (grade=2) {
        return "two"
    }
    if (grade=3) {
        return "three"
    }
    if (grade=4) {
        return "four"
    }if (grade=5) {
        return "five"
    }if (grade=6) {
        return "six"
    }if (grade=7) {
        return "seven"
    }if (grade=8) {
        return "eight"
    }if (grade=9) {
        return "nine"
    }
    else {
        return "Введите число от 0 до 9"
    }
}
function jdhcfv(efvc) {

}
module.exports = {getResult3,isAdult,findMax,convertScoreToGrade, convertGradeToScore}












