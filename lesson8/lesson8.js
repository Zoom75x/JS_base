


//Строки

const createString=()=>{
    const singleQuoted='singleQuoted'
    const doubleQuoted="doubleQuoted"
    const backTick=`backTick`

    const testString='Hello "World"'
    const getSum=(a,b)=>{
        return a+b
    }
    const a=2
    const b=3
    console.log(a+"+"+b+"="+getSum(a,b))
    console.log(`${a}+${b}=${getSum(a,b)}`)
}

//createString()

//выведем список гостей через фукцию

const getGuestList=()=>{
    //const guestList="- Иван,\n- Максим,\n- Маша"
    const guestList=`-Иван,
-Максим,
-\\Маша
    `
    return guestList
   // console.log(getGuestList())
}
//console.log(getGuestList())
//console.log(getGuestList())
    //подробнее про длину строки

    const getLengthStr=(str)=>{

     //   return str.length
    }

    //console.log(getLengthStr("World"))
//console.log(getLengthStr(" World "))
//console.log(getLengthStr("\tWorld"))


//задача по получению отдельных букв из строки

const getSubString=(str)=>{
  //  console.log(str[0]);  //получение первой буквы строки
  //  console.log(str.at(0));//получение первой буквы строки

  //  console.log(str[str.length-1]);   //получение последней буквы строки
  //  console.log(str.at(-1))           //получение последней буквы строки
}
//console.log(getSubString("Молоко"))



//получение доступа к каждому элементу строки через функцию и цикл

const getALLElement=(str)=>{
  //  for (let i=0; i<=str.length-1;i++)
   //     console.log(str[i],i)
}
//console.log("/////////")
//for (const strElement of str){
      //  console.log(strElement)
   // }

//getALLElement("Молоко")

// ВООБЩЕ В js НЕЛЬЗЯ ИЗМЕНИТЬ СТРОКУ. КАК ВНЕСТИ ИЗМЕНЕНИЯ В СТРОКУ. ПОПРОБУЕМ

const testString=(str1)=>{
    console.log(str1[0]="м") //получили доступ к первой букве
    str='м'+ str1.slice(1)  //сложили элемент м со строкой стр1 начиная со второго элемента (олоко)
    //и присвоили переменной стр1 новое значение стр1= м+олоко
    console.log(str)
}
//testString("Молоко")

//МЕТОДЫ ПРЕОБРАЗОВАНИЯ СТРОК.
// Сделаем в строке Молоко

const testMethodString=(str)=>{
    console.log(str.toUpperCase())  //все буквы ЗАГЛАВНЫЕ(МОЛОКО)
    console.log(str)  //выведем стоку в неизменном виде МолОко
    console.log(str.toLowerCase()) ////все буквы строчные(молоко)
}
//testMethodString("МолОко")


//ЗАДАЧА ПО ПРЕОБРАЗОВАНИЮ РЕГИСТРА

const testToUpperCase=(str)=>{
    const trimString=str.trim()
    const firstLetterCapitalized= trimString[0].toUpperCase()+trimString.slice(1)
    //переменная firstLetterCapitalized означает - "первая буква заглавная"
    //взяли первый элемент ОЗАГЛАВИЛИ его и прибавили строку начиная со второго элемента
    // но у данного решения есть слабое место - если перед именем будет пробел то имя останется с маленькой буквы "иван"
    //применим метод TRIM -введем новую переменную которая будет обрезана от пробелов trimString и далее все те же процедуры
    // будем осуществлять с этой переменной
    console.log(firstLetterCapitalized)

}
//testToUpperCase("  иван")


// РАССМОТРИМ МЕТОДЫ С ПОМОЩЬЮ КОТОРЫХ МОЖНО НАЙТИ ИСКОМЫЙ ЭЛЕМЕНТ В СТРОКЕ

// метод index0f

//const getIndexElement=(stroka, searchElem)={
    //    return stroka.index0f(searchElem,2)
    //    }
//console.log(getIndexElement("Молоко","о"))


//методы INCLUDES STARTSWITH ENDSWITH

const testSearch=(stroka,searchElem)=>{
    //1 return stroka.includes(searchElem)  включает ли часть внутри строки
    //2 return stroka.startsWith(searchElem)  начинается ли с этой части строка
    //3 return stroka.endsWith(searchElem)  заканчивается ли на эту часть строка
}

//1 console.log(testSearch("Молоко","оло"))
//2 console.log(testSearch("Молоко","Мол"))
//3 console.log(testSearch("Молоко","ко"))


//ПОИСК ПОДСТРОКИ метод slice(start, end) откуда начинаем и где заканчиваем срезать

const getSubStr=()=>{
    console.log("Молоко".slice(2,4))
    console.log("Молоко".slice(4))
    console.log("Молоко".slice(-5,-1))
}
//getSubStr()

//СРАВНЕНИЕ СТРОК

const testString3=()=>{
    console.log("a">"z")
    console.log("a">"Z")
    console.log("a", "a".codePointAt(0))
    console.log("z", "z".codePointAt(0))
    console.log("Z", "Z".codePointAt(0))
}
testString3()











































