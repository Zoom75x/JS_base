//Задача2
//Удалить все ложные значения - removeFalsy
// Функция должна удалять из массива все ложные значения (false, null, 0, "", undefined, и NaN).

const removeFalsy=(arr)=> {
    return arr.filter(value => !!value) //Выражение value => !!value представляет собой стрелочную функцию,
// которая принимает один аргумент value и возвращает результат логического преобразования value в булевое значение.
}
const Array = [1,,2,3,false, null, 0, "", undefined, NaN,12]
const filteredArray = removeFalsy(Array)
console.log(removeFalsy(filteredArray))