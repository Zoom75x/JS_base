const getElementById=()=>{
    console.log("getElement")
    //получить элемент по ID
    console.log(document.getElementById("testLi"))
    console.log(document.getElementById("testLi2"))
    console.log(document.getElementById("testLihwdskuvg"))
    console.log(document.getElementById("outRangeElement"))
}


const getElementByQuerySelect=()=>{
    console.log(document.querySelector("#testLi"))
    console.log(document.querySelector("div"))
    console.log(document.querySelector(".test"))


    console.log(document.querySelectorAll("Li"))
}


const getElementsBy=()=>{
    console.log(document.getElementsByTagName("div"))
    console.log(document.getElementsByClassName("test"))
    console.log(document.getElementsByClassName("ppp"))
}
getElementsBy()



//удаление элементов

const getColorValue=()=>{
    const minValue=0
    const maxValue=255
    return Math.floor(Math.random()*(maxValue - minValue + 1) + minValue)
}

const getRGBColor=()=>{
    const colorR=getColorValue()
    const colorG=getColorValue()
    const colorB=getColorValue()
    return `rgb(${colorR},${colorG},${colorB})`
}

const createSquare =(content,color)=>{

    const newDiv=document.createElement("div")
    newDiv.innerText=content
    newDiv.classList.add("square")
    newDiv.classList.add("square1")
    newDiv.id=content
    newDiv.style.background=getRGBColor()
    return newDiv
}

const addSquare=(square)=>{
    document.body.append(square)
}

for (let i=1; i<6; i++) {
    addSquare(createSquare(i))
}

const removeElement =()=>{
    const removeElement=document.getElementById(2)
    removeElement.remove()
    console.log(removeElement)

}

removeElement()

const cloneElement=()=>{
    const elem= document.getElementById("1")
    const clone =  elem.cloneNode(true)
    document.body.append(clone)
}

cloneElement()













