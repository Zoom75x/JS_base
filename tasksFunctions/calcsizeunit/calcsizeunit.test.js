const {calcSizeUnit}=require("./calcsizeunit")

describe("tests for calcsizeunit",()=>{
    test("calcsizeunit gives positive results",()=>{
        expect(calcsizeunit(120,"Кб")).toEqual(120)
        expect(calcsizeunit(120,"б")).toEqual(122880)
        expect(calcsizeunit(120,"Мб")).toEqual(125829120)
        expect(calcsizeunit(120,"Гб")).toEqual(128849018880)
    })
    test("calcsizeunit gives negative results",()=>{
        expect(calcsizeunit()).toEqual("Выберите единицу измерения")
    })
})