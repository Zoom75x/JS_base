//Задача4
//Переменная n хранит целое число от 0 до 9. Используя оператор if esle,
// написать скрипт, который в зависимости от числа будет выводить слово 
// (Например, если n равно 3, то будет выводиться слово «три»)

function numberToWordConverter(n) {
    if (n===0) {
        return "ноль"
    }
    if (n===1) {
        return "один"
    }
    if (n===2) {
        return "два"
    }
    if (n===3) {
        return "три"
    }
    if (n===4) {
        return "четыре"
    }
    if (n===5) {
        return "пять"
    }
    if (n===6) {
        return "шесть"
    }
    if (n===7) {
        return "семь"
    }
    if (n===8) {
        return "восемь"
    }
    if (n===9) {
        return "девять"
    }
    else {
    return "Введите число от 0 до 9"
    }
}

module.exports={numberToWordConverter}
