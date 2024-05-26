const{isAdult}=require("./ispasswordstrong")

describe("isPasswordStrong",()=>{
    test("isPasswordStrong positive results",()=>{
        expect(isPasswordStrong(4sfgad)).toEqual()
        expect(isPasswordStrong(dfgh11)).toEqual()

    })
    test("isPasswordStrong negative results",()=>{
        expect(isPasswordStrong()).toEqual("")
        expect(isPasswordStrong(45ghj)).toEqual("")
        expect(isPasswordStrong(0)).toEqual("")
    })
})
