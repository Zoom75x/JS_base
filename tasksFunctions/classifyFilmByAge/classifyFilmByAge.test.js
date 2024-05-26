const {classifyFilmByAge}=require("./classifyFilmByAge")
const {classifyTemperature} = require("../classifytemperature/classifytemperature");

describe("classifyFilmByAge tests", ()=>{
    test("classifyFilmByAge positive tests", ()=>{
        expect(classifyFilmByAge("G")).toEqual("фильм для всех возрастов")
        expect(classifyFilmByAge("PG")).toEqual("фильм детям рекомендуется смотреть в сопровождении взрослых")
        expect(classifyFilmByAge("PG-13")).toEqual("фильм для детей старше 13 лет")
        expect(classifyFilmByAge("R")).toEqual("фильм для лиц старше 17 лет")

    })
    test("classifyFilmByAge negative tests",()=>{
            expect(classifyTemperature()).toEqual("Значение не может быть пустым")
            expect(classifyTemperature(12)).toEqual("Вводимые данные должны быть буквенным значением")
})


//     if(rating==="R"){
//         return "фильм для лиц старше 17 лет"
//     }
//     if(typeof (rating) = !string){
//         return "Вводимые данные должны быть буквенным значением"
//     }
//     if(!rating){
//         return "Значение не может быть пустым"