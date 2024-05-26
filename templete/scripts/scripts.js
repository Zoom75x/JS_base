// const createContainer=()=>{
//     const newDiv = document.createElement("div")
//     newDiv.classList.add("container")
//     // newDiv.id="divContainer"
//     return newDiv
// }
//
// document.body.append(createContainer())
import {imgSources} from "../img"


const leftImgContainer = () => {
    const divLeftElement = document.createElement("div")
    divLeftElement.classList.add("container")
    divLeftElement.id = "divContainerLeft"
    return divLeftElement
}
const centerImgContainer = () => {
    const newCenterDiv = document.createElement("div")
    newCenterDiv.classList.add("centering")
    newCenterDiv.classList.add("container")
    newCenterDiv.id = "divContainerCenter"
    return newCenterDiv
}
const rightImgContainer = () => {
    const divRightElement = document.createElement("div")
    divRightElement.classList.add("container")
    divRightElement.id = "divContainerRight"
    return divRightElement
}


document.body.append(leftImgContainer())
document.body.append(centerImgContainer())
document.body.append(rightImgContainer())


const createCart = (src) => {
    const imgCart = document.createElement("img")
    imgCart.src = src
    imgCart.classList.add("imgCart")
    return imgCart
}

const imgCartsCenter = (src) => {
    const imgCartCenter = document.createElement("img")
    imgCartCenter.src = src
    imgCartCenter.classList.add("imgCartCenter")
    return imgCartCenter
}

document.getElementById("divContainerLeft").append(createCart(imgSources.img1))
document.getElementById("divContainerLeft").append(createCart(imgSources.img2))
document.getElementById("divContainerLeft").append(createCart(imgSources.img3))

document.getElementById("divContainerRight").append(createCart(imgSources.img4))
document.getElementById("divContainerRight").append(createCart(imgSources.img5))
document.getElementById("divContainerRight").append(createCart(imgSources.img6))

document.getElementById("divContainerCenter").append(imgCartsCenter(imgSources.img9))
document.getElementById("divContainerCenter").append(createCart(imgSources.img7))
document.getElementById("divContainerCenter").append(createCart(imgSources.img8))