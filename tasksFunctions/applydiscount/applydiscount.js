//Задача7
//Напишите функцию applyDiscount(price, discount), которая применяет скидку к цене, если цена выше определенного порога.



function applyDiscount(price) {
    if (!price ||  price<=0){
        return "Ошибка, нет цены"
    }
    if (price>=1000 ) {
        let discount=0.15
        let resultprice=price - (price*discount)
        return resultprice
    } else {
        return "Скидки нет"
    }
}

console.log(applyDiscount(-1))

module.exports = {applyDiscount}