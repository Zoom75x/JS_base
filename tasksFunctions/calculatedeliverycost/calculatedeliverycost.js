//Задача12
// Напишите функцию calculateDeliveryCost(distance, isFragile), которая рассчитывает стоимость доставки.
// Базовая ставка — 5 долларов за километр. Если товар хрупкий, добавляется дополнительная плата 10 долларов.


let DeliveryCost

function calculateDeliveryCost(distance, isFragile){
    return DeliveryCost=distance*5
    if (isFragile=true){
        return DeliveryCost=(distance*5)+10
    }
    if (!distance || !isFragile){
        return "Введите значения"
    }
}
module.exports={calculateDeliveryCost}