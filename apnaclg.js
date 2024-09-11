let btn=document.createElement("button")
btn.innerText="change mode";
btn.style.backgroundColor="grey";
document.querySelector("body").prepend(btn)

let currentm= "light";

btn.addEventListener("click", ()=>{
    if(currentm==="light"){
        currentm="dark"
        document.body.style.backgroundColor="black";
        console.log("dark")
    }else if(currentm!=="light"){
        currentm="light"
        document.body.style.backgroundColor="white";
        console.log("light")
    }
})