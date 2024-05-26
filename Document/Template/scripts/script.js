
const createContainer=()=>{


    const newDiv=document.createElement("div")
    newDiv.classList.add("container")
    newDiv.id="formContainer"
    return newDiv
}
document.body.append(createContainer())


const createInput=(id, placeholder, type="text")=>{
    const input= document.createElement("input")
    input.classList.add('input')
    input.placeholder=placeholder
    input.type=type
    input.id=id
    return input
}
document.getElementById("formContainer").append(createInput("firstName","Веедите имя"))
document.getElementById("formContainer").append(createInput("lastName","Веедите фамилию"))
document.getElementById("formContainer").append(createInput("password", "Введите пароль", 'password'))


const createButton=()=>{
    const button= document.createElement('button')
    button.innerText='Вход'
    button.id='login'
    button.classList.add('btnLogin')
    return button
}

document.getElementById('formContainer').append(createButton())

//слушатель событий  element.addEventListener(event, handler,[options])


    const addEventListenerForButton=()=>{
    const btn=document.getElementById('login')

    const onClickHandler=(event)=>{
        console.log('Клик на кнопку', event)
        const result={}
        const inputList=document.getElementsByClassName("input")
        for (let i=0; i<inputList.length; i++) {
            if(!inputList[i].value) {
                alert(`Введите данные: ${inputList[i].id}`)
                return
            }
            result[inputList[i].id]=inputList[i].value
            //console.log(inputList[i].id)
            //console.log(inputList[i].value)
        }
        console.log(result)

    }
    const onMouseOverHandler=(event)=>{
        //console.log(event.target)
        event.target.classList.add('btnLoginMouseOver')
        //console.log("Курсор над кнопкой")
    }

    const onMouseLeave=(event)=>{
        event.target.classList.remove('btnLoginMouseOver')
        //console.log('курсор покинул кнопку')
    }

    btn.addEventListener('click', onClickHandler)
    btn.addEventListener("mouseover",onMouseOverHandler)
    btn.addEventListener("mouseleave",onMouseLeave)

}

addEventListenerForButton()































