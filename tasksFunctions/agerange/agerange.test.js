const{ageRange}=require("./agerange")

describe("ageRange tests",()=>{
    test("ageRange positive results",()=>{
        expect(ageRange(3)).toEqual("Ребенок")
        expect(ageRange(15)).toEqual("Подросток")
        expect(ageRange(30)).toEqual("Взрослый")
        expect(ageRange(66)).toEqual("Пенсионер")
    })
    test("classifyTemperature negative results",()=>{
        expect(ageRange()).toEqual("Введите значение возраста")
    })
})