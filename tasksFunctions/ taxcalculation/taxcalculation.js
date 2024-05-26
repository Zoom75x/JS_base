//Задача16
//Расчет налога: Создайте функцию, которая рассчитывает налог на доход.
// Пусть налог составляет 13% для дохода до 10000 единиц и 20% для дохода выше этой суммы.

let tax
function taxCalculation(summ){
    if (summ<10000){
        return tax=summ*0.13}
    if(summ>=10000){
        return tax=summ*0.2
    }
    if (!summ || summ<0) {
        return "Введите любое значение больше нуля"
    }
}

module.exports={taxCalculation}