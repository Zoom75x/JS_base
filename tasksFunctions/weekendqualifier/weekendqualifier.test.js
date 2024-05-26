const{weekendQualifier}=require("./weekendQualifier")

describe("weekendQualifier tests",()=> {
    test("weekendQualifier positive results", () => {
        expect(weekendQualifier(1)).toEqual("Это НЕ выходной день")
        expect(weekendQualifier(7)).toEqual("Это выходной день")

    })
    test("weekendQualifier negative results", () => {
        expect(weekendQualifier()).toEqual("Введите значение от 1 до 7")
    })
})
