const {numberToWordConverter}=require("./numbertowordconverter")

describe("tests for numbertowordconverter",()=>{
    test("numbertowordconverter gives positive results",()=>{
        expect(numberToWordConverter(0)).toEqual("ноль")
        expect(numberToWordConverter(9)).toEqual("девять")
    })
    test("numbertowordconverter gives negative results",()=>{
        expect(numberToWordConverter(15)).toEqual("Введите число от 0 до 9")
    })
})