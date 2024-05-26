const{classifyTemperature}=require("./classifyTemperature")

describe("classifyTemperature tests",()=>{
    test("classifyTemperature positive results",()=>{
        expect(classifyTemperature(25)).toEqual("Жарко")
        expect(classifyTemperature(0)).toEqual("Тепло")
        expect(classifyTemperature(-1)).toEqual(" Холодно")

    })
    test("classifyTemperature negative results",()=>{
        expect(classifyTemperature()).toEqual("Введите значение температуры")
    })
})