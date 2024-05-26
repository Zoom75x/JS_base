document.body.addEventListener("mousemove", function (){
    console.log("move",event)
})
const setListener=()=>{
        function  handler(event) {
            console.log(event.target)
        }
    document.getElementById("div").addEventListener("click", handler, [])

}
setListener()