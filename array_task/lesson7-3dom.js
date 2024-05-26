

//  ДОБАВЛЕНИЕ И УДАЛЕНИЕ ЭЛЕМЕНТОВ В МАССИВ

const fruits=["Банан","Яблоко","Груша"]

console.log(`начальный массив`,fruits)
//console.log(fruits.length)
//console.log(fruits[0])

const addElemToArr = (arr, elem)=>{
    //arr.push  ДОБАВИТЬ В КОНЕЦ МАССИВА
    const copyArr=arr.slice()
    copyArr.push("Киви")
    console.log(`длина получившегося массива` ,copyArr.push("Киви"))
    return copyArr
}

//console.log(`результирующий массив`, addElemToArr(fruits))
//console.log(`исходный массив`, fruits)
//console.log(`длина исходного массива`, fruits.length)



//УДАЛЕНИЕ ЭЛЕМЕНТОВ ИЗ МАССИВА
// метод POP удаляет послдений элемент из массива и возврашает этот элемент

const removeElemToArr=(arr)=>{
    const copyArr=arr.slice()
    copyArr.pop()
    return copyArr
}

console.log(removeElemToArr(fruits))
console.log(`конечный массив`, fruits)

//удаление с начала массива

const addElemToStatArr=()=>{}





