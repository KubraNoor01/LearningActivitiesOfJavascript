
// function checkEven(){
//     let arr=[1,2,3,4,5,6]
//     let arr1=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             arr1[i]=arr[i];
//             console.log(arr1[i]);
//         }
//     }
    
// }
// checkEven();

// //q2
// function fahrenheitToCelcius(){
//     let fahrenheit=[20,30,29]
//     let celsius=[];
//     for(let i=0;i<fahrenheit.length;i++){
//         celsius[i] = (fahrenheit[i] - 32) * 5 / 9;
//         console.log("temprature in Celcius: " +  celsius[i] + " Celcius");
//     }
// }
// fahrenheitToCelcius()

// //q3
// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr;
// }

// function RemoveDup() {
//     let arr = [12, 2, 2, 2, 4,9,0,0,12];
// bubbleSort(arr)
//    let uniqueArr = [];

//     for (let i = 0; i < arr.length; i++) {
       
//         if (arr[i] !== arr[i + 1]) {
//             uniqueArr.push(arr[i]);
//         }
//     }

 
//     console.log(uniqueArr);
// }

// RemoveDup();

// //--------------------------------
// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr;
// }

// function RemoveDup() {
//     let arr = [12, 2, 2, 2, 4,9,0,0,12];
// bubbleSort(arr)
//    let uniqueArr = [];

//     arr.filter((el, i)=>{
//         if(arr[i]!==arr[i+1]){
//             uniqueArr.push(el);
//         }
//     });
 
//     console.log(uniqueArr);
// }

// RemoveDup();
// //-------------------------------------------

// //Assignment part 2
// const books = [
//     { name: "The Great Gatsby", price: 10.99, author: "F. Scott Fitzgerald" },
//     { name: "1984", price: 8.99, author: "George Orwell" },
//     { name: "To Kill a Mockingbird", price: 12.49, author: "Harper Lee" },
//     { name: "Moby Dick", price: 11.95, author: "Herman Melville" },
//     { name: "Pride and Prejudice", price: 9.99, author: "Jane Austen" }
//   ];

//  //method 1
// for(let i=0 ;i < books.length;i++)
//     console.log(books[i].name)


// //q2---------------------------------------------------------------
//  const filterBook=books.filter((el)=>{
//      if(el.price >10){
//          return el
//      }
//  });
//  console.log(filterBook);

//  //q3-------------------------------------------------------------
// for(let i=0;i <books.length ; i++){
//     console.log(books[i].name + " is written by " + books[i].author +
//     " and is available at this " + books[i].price + " price");
// }

// 