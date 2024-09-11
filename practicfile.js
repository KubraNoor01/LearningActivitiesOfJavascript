// //fizz buzz game
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
// let fac=1;
// let n=Number(prompt("Enter the number for factorial:"));
// for(let i=2;i<=n;i++){
//     fac=fac*i;
    
// }console.log(fac);
// let str=prompt("Enter the string need to check:");
// let str1="";
// for(let i=str.length-1  ;i>=0;i--){
//     str1 +=str[i];
// }
// console.log(str1);
// if(str==str1){
//     console.log(str + " is palindrome")
// }else{
//     console.log(str + " is not palindrome")
// }
// let number = Number(prompt("Enter the number for the table:"));
// for (let i = 1; i <= 10; i++) {
//     let table = number * i;
//     console.log(number + " x " + i + " = " + table);
// }
// let day = Number(prompt("Enter  the to check the day"));
// switch (day) {
//   case 1:
//     console.log('Sunday');
//     break;
//   case 2:
//     console.log('Monday');
//     break;
//   case 3:
//     console.log('Tuesday');
//     break;
//   case 4:
//     console.log('Wednesday');
//     break;
//   case 5:
//     console.log('Thursday');
//     break;
//   case 6:
//     console.log('Friday');
//     break;
//   case 7:
//     console.log('Saturday');
//     break;
//   default:
//     console.log('Invalid day');
//     break;
// }


// function generateFibonacci(n) {
//     let fib0 = 0;
//     let fib1 = 1;

//     // Handle cases where n is less than or equal to 0
//     if (n <= 0) {
//         return;
//     }

//     // Print the first Fibonacci number
//     console.log(fib0);

//     if (n === 1) {
//         return;
//     }

//     // Print the second Fibonacci number
//     console.log(fib1);

//     // Generate and print the rest of the Fibonacci sequence
//     for (let i = 3; i <= n; i++) {
//         let fibNext = fib0 + fib1;
//         console.log(fibNext);

//         // Update the previous two Fibonacci numbers
//         fib0 = fib1;
//         fib1 = fibNext;
//     }
// }

// // Example usage:
// let n = 10;
// generateFibonacci(n);


// let str1="mnopqr"
// let str2="nmoprq"

// for(let i=0; i<str1.length;i++){
//     for(let j=0;j<str2.length;j++){
//         if(str1[i]==str2[j]){
         
//         }
//     }
// }

//  function vowel(string){
//     if(string=="a" && string=="e" &&  string=="i" && string=="o" && string=="u")

// }