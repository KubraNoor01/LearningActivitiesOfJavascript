const obj=
    [
       {
        name: "sohaib",
        age:20,
       },
       {
        name: "kubra",
        age:21,
       },
       {
        name: "ayesha",
        age:22,
       },

    ]
      

const table=document.getElementById("table");
const tableHeaders=document.getElementById("thead");
const tableBody= document.getElementById("tbody");
const searchName=document.getElementById("search");
function search(){
    console.log(searchName.value);
    const sval=
}

function papulateTable(data){
    const headersRow= document.createElement("tr");
    const headerOne= document.createElement("th");
    const headerTwo=document.createElement("th");

    headerOne.innerHTML="Name";
    headerTwo.innerHTML="Age";
    headersRow.appendChild(headerOne);
    headersRow.appendChild(headerTwo);
    tableHeaders.appendChild(headersRow);

    data.map ((item)=> {
        const BodyRow= document.createElement("tr");
        const tname=document.createElement("td");
        tname.innerHTML= item.name;
        const tage= document.createElement("td");
        tage.innerHTML=item.age;
        BodyRow.appendChild(tname);
        BodyRow.appendChild(tage);
        tableBody.appendChild(BodyRow);

    })
}
papulateTable(obj)