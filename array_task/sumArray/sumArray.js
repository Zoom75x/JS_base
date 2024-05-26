//Задача3
//Сумма элементов массива - sumArray Создайте функцию, которая считает и возвращает сумму элементов массива.

const array = [1, 2, 3, 4, 5]
const sumArray=(arr)=> {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
console.log(sumArray(array))