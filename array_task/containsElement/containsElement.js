//Задача5
// Проверка наличия элемента - containsElement
// Функция должна проверять, содержит ли массив заданный элемент, и возвращать true или false.

const array = [0, 2, 36, 57, 500]
const elemFind = 36
const elemFind2 = 7
const containsElement=(arr, elem)=> {
    return arr.includes(elem)
}
console.log(containsElement(array, elemFind))
console.log(containsElement(array, elemFind2))