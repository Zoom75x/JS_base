const {getLengthArrayCustom}=require("./lessons7-2")
const {users}=require("./data")

describe("tests", () => {
    test("getLengthArrayCustom test", () => {
        expect(getLengthArrayCustom([users]).toEqual(15)
    })

})