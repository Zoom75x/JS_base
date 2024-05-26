//Задача1
//Функция sumToN: Напишите функцию sumToN(N), которая использует цикл for для вычисления суммы всех чисел от 1 до N.


function sumToN(N) {
    let totalSum=0
    for (let i = 1; i <= N; i++) {
        console.log(i, 'i')
        totalSum = totalSum + i
        console.log(totalSum, 'totalSum')
    }
    console.log(totalSum)
    return totalSum
}

sumToN(5)