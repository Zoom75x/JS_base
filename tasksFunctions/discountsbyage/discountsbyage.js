//Задача17
//Определение скидки по возрасту: Напишите функцию, которая предоставляет различные скидки в зависимости
// от возраста покупателя: дети до 7 лет — 15% скидка, школьники (7-17 лет) — 10% скидка,
// взрослые (18-65 лет) — без скидки, пенсионеры (старше 65) — 20% скидка.


let discount
function discountsByAge(age){
    if (age<7){
        return discount="15%"
    }
        if (age>=7 && age<=17){
            return discount="10%"
        }
        if (age>=18 && age<=65){
            return discount="Нет скидки"
        }
    if (age>65){
        return discount="20%"
    }
    if (!age){
        return "Введите значение возраста"
    }
}

module.exports={discountsByAge}