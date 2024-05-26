const {findMax} = require("./findmax")

describe("findMax tests",()=>{
    test("findMax positive results",()=>{
        expect(findMax(1,5)).toEqual(5)
        expect(findMax(8,3)).toEqual(8)
        expect(findMax(-8,-11)).toEqual(-8)
        expect(findMax(0,-8)).toEqual(0)
    })
        test("findMax negative results",()=>{
        expect(findMax(0,0)).toEqual("Введенные значения равны")
        expect(findMax(1,1)).toEqual("Введенные значения равны")
        expect(findMax()).toEqual("Введите значения аргументов")
        })
})
