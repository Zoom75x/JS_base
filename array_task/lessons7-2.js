const {users}=require("./data")
//console.log(users[0])

const getLengthArrayCustom=(arr)=>{
    let totalCount=0
    for (const arrElement of arr) {
        totalCount=totalCount+1
    }
    return totalCount
}


//console.log(getLengthArrayCustom(users))


const getLengthArrayCustomV2=(arr) => {
    const arrCopy=[...arr]
    return reverseArray=arrCopy.reverse()
    const firstElementInReverseArray=reverseArray[0]
    const index=arr.indexOf(firstElementInReverseArray)
    return index +1
}


//splice

const testSpice=(arr)=>{
    const arrCopy=[...arr]
    delete arrCopy[1]
    return arrCopy
}
//console.log(testSpice())


const newusers=(arr)=> {
    const arrCopy = [...arr]
    const user1 =
        {
        createdAt: '2024-02-10T10:26:27.478Z',
        firstName: 'AZIZ',
        lastName: 'IVANOV',
        gender: 'male',
        city: 'Severn',
        numberPhone: '1-514-902-8598 x48113',
        Age: 23,
        id: '1'}
    //arrCopy.splice(4, 3, user1)
    arrCopy.splice(0, 0, "1234567891011")
    return arrCopy
}

    //console.log(newusers(users))




const testConcat=()=>{
    const arr1=[1,2,3]
    const arr3=[4,5,6]
    let newArr=[]
    newArr = newArr.concat(arr1,arr3)
    return newArr
}





//console.log(testConcat())




//метод forEach


const testForEach=(arr)=>{
    let sumGenderMale=0
    let sumGenderFeMale=0
    const copyArr=arr.slice()
    let totalSumAge=0


    arr.forEach((user, index,users)=>{
        totalSumAge=totalSumAge+user.Age
        user.numberPhone = "333"

        if (user.gender==="male") {
            sumGenderMale=sumGenderMale+1
        } else if (user.gender==="female"){
            sumGenderFeMale=sumGenderFeMale+1
        }
    })
console.log("M", sumGenderMale)
console.log("G", sumGenderFeMale)
//console.log(copyArr)
const averageAge = totalSumAge/copyArr.length
console.log(averageAge)

}
testForEach(users)

const testForEach1=(arr)=>{
    arr.forEach((user, index,users)=>{
        console.log(user, index,users)
    })


}
//testForEach1(users)








module.exports = {getLengthArrayCustom,getLengthArrayCustomV2,newusers}
