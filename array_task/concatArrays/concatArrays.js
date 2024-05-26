//Задача4
//Объединение массивов - concatArrays Напишите функцию,
// которая объединяет два массива и возвращает результат.

const arrayA = [1, 1, 1]
const arrayB = [2, 2, 2]
const sumArray=(arr1, arr2)=> {
    return [...arr1, ...arr2]
}
console.log(sumArray(arrayA, arrayB))