// let number= Number(prompt("Enter the number (for even and odd):"));
// if(number<=0){
//     console.log("invalid input")
// }
// else if(number%2==0){
//     console.log(number + " is an even " )
// }else if(number%2!=0){
//     console.log(number + " is an odd number")
// }
//q2
function enterValue(){let number= Number(prompt("Enter the how many number you waant to enter:"));
    for(let i=0;i<number; i++){
        let number= Number(prompt("Enter the numbers:"));
        console.log(number);
    }
}
enterValue(); 
//q3
// function sum() {
//     let num = 5;
//     let sum = 0;
//     let greater = 0;

//     for (let i = 0; i < num; i++) {
//         let number = Number(prompt("Enter the number for sum & greater:"));
        
        
//         if (number > greater) {
//             greater = number;
//         }

//         sum += number;
//     }

//     console.log("The greater number among all is " + greater);
//     console.log("Sum = " + sum);
// }

// sum();
