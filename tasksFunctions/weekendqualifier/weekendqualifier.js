//Задача15
//Определение выходного дня: Напишите функцию, которая принимает номер дня недели (1 до 7)
// и определяет, является ли этот день выходным (суббота или воскресенье).


function weekendQualifier(daynumber) {
    if(daynumber>=1 && daynumber<=5) {
        return "Это НЕ выходной день"
    }
    if (daynumber===6 || daynumber===7){
        return "Это выходной день"
    }
    if(!daynumber) {
        return  "Введите значение от 1 до 7"
    }
}

module.exports={weekendQualifier}