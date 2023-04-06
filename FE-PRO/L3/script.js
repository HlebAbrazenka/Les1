// let a = 10;
// if (a>10){
//     console.log ("a>10")
// } 
// else if (a==10){
//     console.log ("a=10")
// }
// else{
//     console.log ("a<10")
// }

// let a = 30;
// if (a > 10){
//     console.log("TRUE");
// };

// if (a > 20){
//     console.log("FALSE");
// };

// if (a == 30){
//     console.log("=");
// };

// let age = 100;
// if (age>=18){
//     console.log("Adult")
// }
// else{
//     console.log("Children")
// }

// let a = 10;
// let b = 15;

// if (a>b){
//     console.log("a>b")
// }
// else{
//     console.log("a<b")
// }

// let a = 100;
// let b = 15;

// if (a>b){
//     console.log("a=", a, "b=", b,"a>b")
// }
//     else if (a==b){
//         console.log("a=", a, "b=", b, "a=b")
// }
// else{
//     console.log("a=", a, "b=", b,"a<b")
// }

// ----------Interpolation---------------------------//

// let hi = "Hi"
// let my = "my"
// let friend = "friend"

// //console.log(hi , ",", my , friend, ".");
// console.log(`${hi}, ${my} ${friend}.`)


// let r = 12
// let g = 34
// let b = 14
// console.log("rgb" + "(" +r + "," +g + "," +b +")");
// console.log(`rgb(${r}, ${g}, ${b})`);

// ------------------isNaN-------------------------------
// let a = NaN

// console.log(isNaN (a))

//let value1 = "100f"
let value2 = "100"

//console.log(isNaN (value1));
if (isNaN(+value2)){
    console.log("NaN")
}
else{
    console.log("No-NaN")
}

