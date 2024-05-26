//ЦИКЛЫ


//while

const loopWhile = () => {
    console.log("Код до цикла")

    let i = 0


    function getResult(value) {
        console.log(value)
        console.log(value <= 10)
        return value <= 10
    }

    while (getResult(i)) { //пока условие истинно цикл работает, тело цикла выполняется
        console.log("Привет")
        i = i + 1
    }
    console.log("Код после цикла")


}


const loopWhile2 = (value, stopValue) => {

    let i = 0
    while (true) {
        i = i + 1
        if (i === value) {
            console.log("Выкинули ", i)
            continue
        }
        if (i === stopValue) {
            console.log("Остановились", i)
            break
        }
        console.log(i)


    }


}

//loopWhile2(5, 150)
function loopWhile3() {
    console.log("start loopWhile3")
    while (false) {
        console.log("Один раз сработал")
    }
    console.log("end loopWhile3")

}

function loopDoWhile() {
    console.log("start loopDoWhile")
    do {
        console.log("Один раз сработал")
    } while (false)
    console.log("end loopDoWhile")

}

//loopWhile3()
//loopDoWhile()
function loopDoWhile2(stopValue) {
    console.log("start loopDoWhile2")
    let count = 0
    do {
        if (count === 0) {
            console.log("Первый раз сработал", count)
        } else {
            console.log("count", count)
        }
        count = count + 1

    } while (count <= stopValue)
    console.log("end loopDoWhile2")

}

//loopDoWhile2(150)

const loopSlider = (numberPictures) => {
    console.log("start loopSlider")

    let count = 0
    let totalCount = 0

    while (true) {
        count = count + 1
        // count++
        console.log(`Показываем слайдер ${count}`)
        totalCount = totalCount + 1
        if (count === numberPictures) {
            count = 0
            console.log("Обнулили")
        }
        if (totalCount === 50) {
            break
        }

    }
    console.log("end loopSlider")

}


//for

/* for(начало; условие; шаг;){
    тело цикла
}*/


function loopFor() {

    for (let i = 0; i <= 3; i = i + 1) {
        console.log("Hello", i)
    }


}


function loopFor2(startValue, stopValue, step) {
    console.log("start  loopFor2")

    for (let i = startValue; i <= stopValue; i = i + step) {
        console.log(i)
    }


    console.log("end  loopFor2")


}

//loopFor2(0, 100, 2)

function printEvenNumber(startNum, stopNum) {
    console.log("start printEvenNumber", startNum, startNum)
    for (let i = startNum; i <= stopNum; i++) {
        // if (i % 2 === 0) {
        //     console.log("Число четное", i)
        // }
        if (!(i % 2)) {
            console.log("Число четное", i)
        }
    }
    console.log("end printEvenNumber")

}

//printEvenNumber(0, 100)


function getTotalSum(startValue, stopValue) {
    //вывести сумму чисел от startValue до stopValue
    console.log("start printEvenNumber")
    let sum = 0
    for (let i = startValue; i <= stopValue; i++) {
        // console.log(`oldSum  = ${sum}`)
        // console.log(`i = ${i} `)
        // console.log(` newSum = oldSum=>${sum} + i=>${i}, newSum=>sum ${sum + i}`)
        // console.log("///////////////\n")
        console.log(`${sum} + ${i} = ${sum + i}`)
        sum = sum + i

    }
    console.log("end printEvenNumber")

}

function loopInLoop() {
    for (let i = 0; i < 10; i++) {
        console.log(`i ${i} `)
        for (let j = 0; j < 10; j++) {
            console.log(` j  ${j}`)
            // console.log("j " + j )
            for (let k = 0; k < 10; k++) {
                console.log(`   k  ${k}`)


            }
            console.log("\n")

        }
        console.log("\n")
    }
}

//loopInLoop()

//Функция isPrime: Реализуйте функцию isPrime(N), которая использует цикл for для проверки, является ли число N простым
// числом.

const isPrime = (value) => {
    if (value === 0) {
        return false
    }

    for (let i = 1; i <= value; i++) {
        if (i === 1 || i === value) {
            continue
        }
        //  console.log("value / i",value / i)
        // console.log("value % i",value % i)

        if (value % i === 0) {
            return false
        }
    }
    return true
}
// console.log(isPrime(7));
// console.log(isPrime(5));
// console.log(isPrime(24))
// console.log(isPrime(10))
// console.log(isPrime(0))

function iterStr(str) {
    for (const strElement of str) {
        console.log(strElement)
    }

}

function iterStr2(str) {
    for (let i = 0; i <= str.length - 1; i++) {
        console.log(str[i])
    }
}

iterStr("Hello world")
iterStr2("Hello world")




