const{taxCalculation}=require("./taxcalculation")

describe("taxCalculation tests",()=>{
        test("taxCalculation positive results",()=>{
                expect(taxCalculation(2000)).toEqual(260)
                expect(taxCalculation(11000)).toEqual(2200)
        })
        test("taxCalculation negative results",()=>{
                expect(taxCalculation()).toEqual("Введите любое значение больше нуля")
        })
})