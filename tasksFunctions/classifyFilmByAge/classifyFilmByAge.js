

//Задача18
//Классификация фильмов по возрасту: Разработайте функцию, которая классифицирует фильмы в зависимости
//от возрастного рейтинга: "G" — для всех возрастов, "PG" — детям рекомендуется смотреть в сопровождении взрослых,
  //  "PG-13" — для детей старше 13 лет, "R" — для лиц старше 17 лет.


function classifyFilmByAge(rating){
    if(rating==="G"){
        return "фильм для всех возрастов"
    }
    if(rating==="PG"){
        return "фильм детям рекомендуется смотреть в сопровождении взрослых"
    }
    if(rating==="PG-13"){
        return "фильм для детей старше 13 лет"
    }
    if(rating==="R"){
        return "фильм для лиц старше 17 лет"
    }
    if(typeof rating ==!string){
        return "Вводимые данные должны быть буквенным значением"
    }
    if(!rating){
        return "Значение не может быть пустым"
    }
}

module.exports={classifyFilmByAge}