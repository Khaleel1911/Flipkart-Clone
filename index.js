const login=document.getElementById("login");
const arrow=document.getElementById("arrow");

login.addEventListener("mouseover",()=>{
    arrow.style.transform="rotate(180deg)";
})
login.addEventListener("mouseout",()=>{
    arrow.style.transform="rotate(360deg)";
})


