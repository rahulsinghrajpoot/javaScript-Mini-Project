// practice question 1
// check number is multiple of 5

// let num = prompt("Enter a Number.");
// if(num % 5 == 0){
//     console.log(num, "is Multiple of 5");
// }else{
//     console.log(num, "is not multiple of 5");
// }

// // practice question 2

// let score = prompt("Enter score of student");
// if(score >= 90 && score <= 100){
//     console.log(score, "Means it is A grade");
// } else if(score >= 70 && score <= 79){
//     console.log(score, "Means it is B grade");
// }else if(score >= 60 && score <= 69){
//     console.log(score, "Means it is C grade");
// }else if(score >= 50 && score <= 59){
//     console.log(score, "Means it is D grade");
// }else{
//     console.log(score, "Means it is Fail or F grade");
// }96



// for(let i = 0; i<=100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }



// let gameNumber = 22;
// let enteredNUmber = prompt("Enter a guessed number");
// while(enteredNUmber != gameNumber){
//     enteredNUmber = prompt("You are wrong. Guess again!");
// }
// console.log("Congratulations you guess the right number");


// let price = 10;
// console.log(`the price of pen is ${price} rupees`);


// let fullName = prompt("Enter your full name");
// let num = fullName.length;
// console.log(`user id is - @${fullName}${num}`);


// practice question 

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let m of marks){
//     sum += m;
// }
// let average = sum / (marks.length);
// console.log(average);


// let price = [250, 645, 300, 900, 50];
// for(let i =0; i<price.length; i++){
//     // let value = price[i];
//     price[i] = price[i] - (price[i] * 0.1);
// }

// console.log(price);


// let companies = ["Bloomberg", "microsoft", "uber" , "google", "IBM", "netflix"];
// // companies.shift();
// companies.splice(2, 1, "Ola");
// companies.push("Amazon");
// console.log(companies);


// let count = 0;
// function countVowels(str){
//     for(let val of str){
//         if(val === "a" || val === "e"|| val === "i"|| val === "o"|| val === "u"|| val ==="A"|| val ==="E"|| val==="I"|| val==="O"|| val==="U"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels("rahulSingh");


// const arrowCountVowels = (str) => {
//     for(let val of str){
//         if(val === "a" || 
//             val === "e"|| 
//             val === "i"|| 
//             val === "o"|| 
//             val === "u"|| 
//             val === "A"|| 
//             val === "E"|| 
//             val === "I"|| 
//             val === "O"|| 
//             val === "U"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// arrowCountVowels("rahulSingh");


// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val, sqr) =>{
//     sqr = val * val;
//     console.log(val, sqr);
// })

// let marks = [87, 93, 87, 99, 86];
// const updated = marks.filter((val) =>{
//     if(val > 90){
//         return val;
//     }
// })

// console.log(updated);


let n = prompt("Enter a number.");

let arr =[];
for(let i = 1; i<=n; i++){
    arr.push(i);
}
console.log(arr);

let res = arr.reduce((sum, val) => {
             return sum + val;
            })

console.log(res);

let product = arr.reduce((prod, val) => {
    return prod * val;
})

console.log(product);