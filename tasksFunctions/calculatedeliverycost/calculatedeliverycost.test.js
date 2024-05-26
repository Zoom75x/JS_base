const{calculateDeliveryCost}=require("./calculatedeliverycostost")

describe("calculateDeliveryCost tests",()=>{
    test("calculateDeliveryCost positive results",()=>{
        expect(calculateDeliveryCost(10,true)).toEqual(60)
        expect(calculateDeliveryCost(1,false)).toEqual(5)
    })
    test("isAdult negative results",()=>{
        expect(calculateDeliveryCost()).toEqual("Введите значения")

    })
})