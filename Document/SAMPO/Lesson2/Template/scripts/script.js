

// функция которая редиректит на другой заданный сайт

    const goToOtherSyte=()=>{
    if(confirm("Переходим на mail.ru?")){
        location.href="https://mail.ru"
    }
}
    //goToOtherSyte()

// DOM
const getBody=()=>{
    document.body.style.background="grey"
}
//getBody()

//  к чему обращаться?
//если нужно работать с html то document
//если нужно работать с body - document.body
//если нужно работать с head - document.head


//пишем функция которая посчитает сколько детей у элемента document.body
//прогоним через цикл от 0 до длины массивоподобной коллекции дочерних элементов бади
const getAllElement=()=>{
        //for (let i=0; i<document.body.childNodes.length; i++){
            //console.log(document.body.childNodes[i])
        //}
    //еще один способ через цикл фороф
    for (const argument of document.body.childNodes) {
        console.log(argument)
    }
}
//getAllElement()

//но эта функция возвращает нам абсолютно все пустые ноды и пробелы то есть много лишнего
// поэтому напишем новую функцию

const getChildren=()=>{
    //for (const argument of document.body.children) {
        //console.log(argument)
        for (let i=0; i<document.body.children.length;i++){
            console.log(document.body.children[i])
        }
    }
//getChildren()
//при помощи свойств можно получить первый и последний дочерний элемент
//console.log("первый дочерний элемент",document.body.firstElementChild)
//console.log("последний дочерний элемент",document.body.lastElementChild)

//при помощи свойств можно получить родительский и соседний элемент
//console.log("родитель элемента",document.body.parentElement)
//console.log("сосед нулевого элемента", document.body.children[0].nextElementSibling)


//напишем функцию которая ищет элемент по какому либо признаку
const getElementBy=()=>{
    console.log('getElementById', document.getElementById("firstLI").innerText); //innerText показывает вложенный текст
    console.log('getElementByTagName', document.getElementsByTagName("li"))
    console.log('getElementsByClassName', document.getElementsByClassName("LiClass"))
    //самый универсальный способ поиска элемента querySelector
    //находит первый такой элемент и останавливается
    console.log('querySelector',document.querySelector("LiClass"))
    // а следующий querySelectorAll находит все такие элементы
    console.log('querySelectorAll',document.querySelectorAll("liClass"))
    //теперь найдя нужный элемент можем задать ему изменение каких либо атрибутов
    document.getElementsByClassName("liClass")[0].style="border:1px solid black"


}
console.log(getElementBy())










