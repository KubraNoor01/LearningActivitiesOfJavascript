let li=document.querySelector("#ul");
    console.log(li);

    let input=document.querySelector("inp")
    console.log(input);

function crud(){

    console.log(input);
}

const names=["ayesha","kubra","sana","fatimah"];

for(let i=0;i<names.length;i++){

const li=document.createElement("li");
li.innerHTML=names[i];
ul.appendChild(li);

const deleteButton=document.createElement("button");
deleteButton.innerHTML="Delete";
const updatebtn=document.createElement("button");
updatebtn.innerHTML="update";
deleteButton.addEventListener("click", function(){
    ul.removeChild(li);

})
updatebtn.addEventListener("click", function(){
    const inputFeild=document.createElement("input");
    const savebtn=document.createElement("button");
     savebtn.innerHTML="save";
     savebtn.addEventListener("click" , function(){
        console.log(inputFeild.value);
        li.innerHTML=inputFeild.value;
     })
     inputFeild.type="text";
     li.appendChild(inputFeild);
     inputFeild.value=names[i];
     li.appendChild(savebtn);
})
li.appendChild(deleteButton);
li.appendChild(updatebtn);


}