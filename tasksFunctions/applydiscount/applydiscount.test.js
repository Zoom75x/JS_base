const {applyDiscount}=require("./applydiscount")

describe("tests for ApplyDiscount", () => {
    test("applydiscount gives positive results", ()=>{
        expect(applyDiscount(1500)).toEqual(1275)
        expect(applyDiscount(1000)).toEqual(850)
        expect(applyDiscount(999)).toEqual("Скидки нет")
        })
    test("applydiscount gives negative results", ()=>{
        expect(applyDiscount()).toEqual("Ошибка, нет цены")
        expect(applyDiscount(-1)).toEqual("Ошибка, нет цены")

    })

});