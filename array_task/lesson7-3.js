const {users}=require("./data")

//  метод indexOf

const testArr = ["Яблоко", "Груша","Банан"]
const testIndexOff = (arr) => {
    const copyArr = arr.slice()
   // console.log((copyArr.indexOf("Груша")))

    return

}

//console.log(testIndexOff(testArr, "Банан"))

//метод lastIndexOf
const testLastIndexOff=(arr, searchElement)=>{
    const copyArr=arr.slice()
    return copyArr.lastIndexOf(searchElement)
}

//console.log(testLastIndexOff=(testArr, "Банан"))

// задачка  на допустимые оценки

const acceptableScores=["4","5"]
const getPassingGrade = (arrScores, score) =>{
    return arrScores.includes(score)
}
//console.log(getPassingGrade(acceptableScores, "3"))


//find findIndex

const testFind = (arr) =>{
    return arr.find(function (elem, index){
        return elem.firstName==="Emily"
    })
}

console.log(testFind(users))







