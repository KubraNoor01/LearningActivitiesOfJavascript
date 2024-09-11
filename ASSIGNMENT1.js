function changeBgC(){
    let alldiv=document.querySelectorAll(".box");
    index=0;
    let colourArr = ['red', 'blue', 'green', 'yellow'];
    for(div of alldiv){
        div.style.backgroundColor=colourArr[index]
        index++;
    }
}

//q2:

