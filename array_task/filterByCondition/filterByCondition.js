//Задача6
//Фильтрация по условию - filterByCondition Реализуйте функцию,
// которая фильтрует массив по заданному условию и возвращает новый массив.


const array = [1, 2, 3, 4, 5]
function filterByCondition(arr, condition) {
    return arr.filter(condition)
}
console.log(filterByCondition(array, conditionFunc=(num)=> {return num <4}));
