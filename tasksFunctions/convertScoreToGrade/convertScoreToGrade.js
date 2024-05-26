//Задача3
//Создайте функцию convertScoreToGrade(score) для преобразования числового балла в буквенную оценку.

function convertScoreToGrade(score) {
    if (score=2) {
        return "D"
    }
    if (score=3) {
        return "C"
    }
    if (score=4) {
        return "B"
    }
    if (score=5) {
        return "A"
    }
    if (typeof score !== "number" || score>5 || score<2){
        return "Введите число от 2 до 5"
    }

}
module.exports = {convertScoreToGrade}