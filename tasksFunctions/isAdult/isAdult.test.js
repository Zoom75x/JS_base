const{isAdult}=require("./isAdult")

describe("isAdult tests",()=>{
    test("isAdult positive results",()=>{
        expect(isAdult(43)).toEqual(true)
        expect(isAdult(15)).toEqual(false)
        expect(isAdult(18)).toEqual(true)
        expect(isAdult(17)).toEqual(false)
    })
    test("isAdult negative results",()=>{
        expect(isAdult()).toEqual("Значение не введено")
        expect(isAdult(-7)).toEqual("Значение возраста может быть только положительным числом")
        expect(isAdult(0)).toEqual("Значение возраста может быть только положительным числом")
    })
})

