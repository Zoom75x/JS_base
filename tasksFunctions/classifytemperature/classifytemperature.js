//Задача10
//Напишите функцию classifyTemperature(temp), которая классифицирует температуру воздуха.
// Функция должна возвращать " Холодно", если температура меньше 0, "Тепло", если температура от 0 до 20,
// и "Жарко", если выше 20.

function classifyTemperature(temp) {
    if (temp<0) {
        return "Холодно"
    }
    if (temp>=0 && temp<=20) {
        return "Тепло"
    }
    if (temp>20) {
        return "Жарко"
    }
    if (!temp) {
        return "Введите значение температуры"
    }
}

module.exports={classifyTemperature}