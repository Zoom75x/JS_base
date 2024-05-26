//Задача14
//Напишите функцию getSeason(month), которая возвращает сезон года в зависимости от месяца.
// Зима (12, 1, 2), Весна (3, 4, 5), Лето (6, 7, 8), Осень (9, 10, 11).

function customIncludes(arr,value){   //проверяет равенство знач
    for (let x of arr) {
        if(x===value){
            return true
        }
    }
    return false
}


function getSeason(month) {
    if ([12,1,2].includes(month)) {
        return "Зима"
    }
    if (customIncludes([3,4,5], month)) {
        return "Весна"
    }
    if (month===6 || month===7 || month===8) {
        return "Лето"
    }
    if (month===9 || month===10 || month===11) {
        return "Осень"
    }
    if (typeof month !== "number" || month>12 || month<1){
        return "Введите число от 1 до 12"
    }

}
module.exports = {getSeason}