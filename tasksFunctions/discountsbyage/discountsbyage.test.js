const{discountsByAge}=require("./discountsbyage")

describe("discountsByAge tests",()=> {
    test("discountsByAge positive results", () => {
        expect(discountsByAge(5)).toEqual("15%")
        expect(discountsByAge(15)).toEqual("10%")
        expect(discountsByAge(18)).toEqual("Нет скидки")
        expect(discountsByAge(75)).toEqual("20%")
    })
    test("discountsByAge negative results", () => {
        expect(discountsByAge()).toEqual("Введите значение возраста")
    })
})
