let screenwidth = window.innerWidth;
let int = setInterval(() => {
    screenwidth = window.innerWidth;
    console.log(screenwidth/2);
    document.getElementById("noBtn").style.left = screenwidth/2 - 100 + "px" ;
}, 7000);

function leave(){
    console.log(r);
    if(r == 0){
        document.getElementById("noBtn").style.marginTop = "100px";
        r = 1;
    }
    else{
        document.getElementById("noBtn").style.marginTop = "0px";
        r = 0;
    }
}
let r  = 1;
function leave1(){
    console.log(r);
    if(r == 0){
        document.getElementById("noBtn").style.marginTop = "100px";
        r = 1;
    }
    else{
        document.getElementById("noBtn").style.marginTop = "0px";
        r = 0;
    }
}
