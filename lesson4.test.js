const {getResult3,isAdult,findMax, convertScoreToGrade,convertGradeToScore} = require("./lesson4")

describe("test for getResult3", ()=>{
    test("getResult sum test", ()=>{
        expect(getResult3(5,5,"+")).toEqual(10)
    })
})


describe("test for isAdult", ()=>{
    test("isAdult should return true", ()=>{
        expect(isAdult(18)).toEqual(true)
        expect(isAdult(19)).toEqual(true)
    })

    test("isAdult should return false", ()=>{
        expect(isAdult(17)).toEqual(false)
        expect(isAdult(0)).toEqual(false)
    })
    test("isAdult negative scenario", ()=>{
        expect(isAdult(-1)).toEqual("Error1")
        expect(isAdult("33")).toEqual("Error2")
        expect(isAdult()).toEqual("Error404")
})
})

describe("test for findMax", ()=>{
    test("findMax returns the larger of the two numbers",()=>{
        expect(isAdult(1,5)).toEqual(5)
        expect(isAdult(4,1)).toEqual(5)
    })
        test("findMax not returns because off arguments not a number",()=>{
            expect(isAdult("33",5)).toEqual("Сравниваемые значения должны быть числами")
    })
    test("findMax not returns because off arguments equals",()=>{
        expect(isAdult("33",5)).toEqual("Введенные значения равны")
})
})

describe("test for convertScoreToGrade", ()=>{
    test("convertScoreToGrade converts a numeric score to a letter grade", ()=>{
        expect(convertScoreToGrade(5)).toEqual("A")
    })

    test("convertScoreToGrade error", ()=>{
        expect(convertScoreToGrade(15)).toEqual("Введите число от 2 до 5")
        expect(convertScoreToGrade("erf")).toEqual("Введите число от 2 до 5")
    })
})

describe("test for convertGradeToScore", () => {
    test("convertGradeToScore converts a letter  score to grade numeric", () => {
        expect(convertScoreToGrade(5)).toEqual("fivee")
    })
})