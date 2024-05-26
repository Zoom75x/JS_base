const {getSeason} = require("./getseason");


describe("test for getSeason", ()=>{
    test("getSeason gives positive results", ()=>{
        expect(getSeason(1)).toEqual("Зима")
        expect(getSeason(3)).toEqual("Весна")
        expect(getSeason(7)).toEqual("Лето")
        expect(getSeason(10)).toEqual("Осень")
    })

    test("getSeason gives negative results", ()=>{
        expect(getSeason(15)).toEqual("Введите число от 1 до 12")
        expect(getSeason("erf")).toEqual("Введите число от 1 до 12")
    })
})