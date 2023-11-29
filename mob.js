let input = document.getElementById("userinput")
let newdiv = document.getElementsByClassName("txt")[0]

function Add (){
if(input.value ==="" ){
    alert("plz insert text and after press enter")
}else{
     let createele = document.createElement("ul")
    createele.innerHTML  = `${input.value}<i class="fa-solid fa-trash"></i>`;
    newdiv.appendChild(createele)    
input.value = ""
createele.querySelector("i").addEventListener("click",remove)
function remove(){
createele.remove()
}
}
}
