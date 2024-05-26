//Задача1
//Найти максимальное число в массиве - findMax
//Напишите функцию, которая принимает массив чисел и возвращает максимальное из них.

//1) делаю копию массива
// 2) через цикл запустить взятие каждого элемента массива, запись этого элемента в память
// 3) сравнение взятого элемента с каждым из последующих



const findMax=(arr)=> {
    if (arr.length === 0) {
        return undefined;
    }
    let maxElem = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElem) {
            maxElem = arr[i];
        }
    }
    return maxElem
}
const arrNumbers = [23,45,56767,57,45,2,4,4567,6,0]
console.log(findMax(arrNumbers))




