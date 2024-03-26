const body=document.querySelector("body");
var chk= document.querySelector("#toggle");





chk.addEventListener("change" , (e)=>{
    body.classList.toggle("dark" , e.target.checked);
})