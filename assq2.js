function CheckNum(){
    let n=Number(prompt("Enter the Number:"));
    let ul=document.getElementById("liofno");
   
        if(n%5==0){
           let newlist=document.createElement("li");
           newlist.textContent=n;
           document.getElementById("liofno").appendChild(newlist);
    }else{
        alert('The number is not divisible by 5. Please try again.');
    }
}
