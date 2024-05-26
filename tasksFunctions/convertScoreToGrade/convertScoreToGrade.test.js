const {convertScoreToGrade} = require("./convertScoreToGrade");


describe("test for convertScoreToGrade", ()=>{
    test("convertScoreToGrade converts a numeric score to a letter grade", ()=>{
        expect(convertScoreToGrade(5)).toEqual("A")
    })

    test("convertScoreToGrade error", ()=>{
        expect(convertScoreToGrade(15)).toEqual("Введите число от 2 до 5")
        expect(convertScoreToGrade("erf")).toEqual("Введите число от 2 до 5")
    })
})