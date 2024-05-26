
//массивы array
//Способы создания массивов
const array1 = []
const array2 = new Array()


const fruits = ["apple-0", "lemon-1", "banana-2", "яблоко-3"]

//Доступ к элементам

//console.log(fruits);
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

//Добавим элемент в массив
//console.log("Длинна массива fruits до добавления нового элемента", fruits.length)
//fruits[4] = "ананас-4"
//console.log(fruits, "после добавления");

// Узнать количество элементов в массиве(по факту индекс последнего + 1)
//console.log("Длинна массива fruits", fruits.length)

//fruits[fruits.length] = `киви-${fruits.length}`
//console.log(fruits)

//fruits[123]="фрукт-123"
// console.log(fruits)
// console.log(fruits[122]);
// console.log(fruits.length)


const students = [
    {
        id: 1, name: "Ivan", age: 25, hello: () => {
            return "Hello1"
        }
    },
    {
        id: 2, name: "Vasilii", age: 34, hello: function () {
            return "Hello2"
        }
    }
]

// console.log(students[0])
// console.log("name", students[0].name)
// console.log("name", students[0].name1)
// console.log(students[1].hello())

// Получение последнего элемента
//
// console.log("последний элемент students", students[students.length - 1]);
// console.log("последний элемент fruits", fruits[fruits.length - 1]);
// console.log(students.at(-1))


//fruits[3]='Лук'

// Методы pop/push  shift/unshift


// console.log(fruits);
// console.log(fruits.push("киви"));
// console.log(fruits)
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits)
// console.log(fruits.unshift("киви"));
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits)

//очередь push/pop
//стек push/shift

fruits.push("лимон", "лимон2")
console.log(fruits)

for (let i = 0; i <fruits.length ; i++) {
    console.log(i)
    console.log(fruits[i]);
}
console.log("//////")
for (const fruit of fruits) {
    console.log(fruit)
}

console.log(fruits)
fruits.length=3
console.log(fruits)
const a=[]
const b=a




console.log(a===b)