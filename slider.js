// const left=document.getElementById("left");
// const right=document.getElementById("right");
const slider=document.getElementById("slider");
const images=["one","two","three","four","five","six"];
let i=0;

const t=setInterval(initialslider,3000);


function initialslider(){
    if(i>=5){
        i=0;
    }
    slider.style.backgroundImage=`url("./slider-images/${images[i]}.webp")`;
    slider.style.transition="all 1s ease-in-out";
    i++
}

function right(){
    if(i==6){
        i=0;
    }
    i++;
    slider.style.backgroundImage=`url("./slider-images/${images[i]}.webp")`;
}

function left(){
    if(i==0){
        i=5;
    }
    i--;
    slider.style.backgroundImage=`url("./slider-images/${images[i]}.webp")`;
    console.log("im left");
}