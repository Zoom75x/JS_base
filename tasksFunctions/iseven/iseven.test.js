const{isEven}=require("./isEven")

describe("isEven tests",()=>{
    test("isEven positive results",()=>{
        expect(isEven(4)).toEqual(true)
        expect(isEven(15)).toEqual(false)
    })
    test("isEven negative results",()=>{
        expect(isEven()).toEqual("Значение не введено")
    })
})