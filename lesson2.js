//сравнение значений результат всегда тру или фолс
///console.log(2==3)

//явное привидение типов

const a="42"
const b=Number(a)
//onsole.log(typeof a)
//console.log(typeof b)

//неявнре приведение типов

const c=a*2
//console.log(typeof c)
//псевдоложные
/*console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(false))*/

//псевдоистинные
/*console.log(Boolean("d"))
console.log(Boolean (23))
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(()=>{
}))*/

//Равенства
// == != не строгое равенство (проверка значений)
/*console.log(2=="2")
// какие ошибки могут вылезать при нестрогом равенстве
 */
/*console.log([1,2,3]=="1,2,3")
console.log([]==[])
console.log([]===[])*!/*/

/*const arr=[]
const copyArr=arr
console.log(copyArr==arr)*/
//строгое равенство (проверка типов и значений) - В РАБОТЕ ТОЛЬКО ТАКОЙ ВИД РАВЕНСТВА
//console.log(2==="2")

//НЕРАВЕНСТВА < > <= >=
const a1=42
const a2="43"
const a3="44"
const a4="44"
console.log(a1<a2)
console.log(a2<a3)
console.log(a3<=a4)


