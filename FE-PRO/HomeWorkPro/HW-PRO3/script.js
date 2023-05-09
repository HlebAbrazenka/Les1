//1) Напишите функцию checkString(arg), который принимает аргумент строкового типа.
// Функция должна вывести в консоль первую букву аргумента.

// function checkString(test){
//     return test[test.length - test.length]
// }
// console.log(checkString("Hello"));

// --------------------------------------------------------------------------------
  
//2)Напишите функцию checkMiddleValue(num1,num2), 
//которая получает в качестве аргумента два числовых значения.
//Функция должна вернуть их среднее значение.
//* Доп задание. доработайте функцию таким образом,
//чтобы выводимое значение округлялось до десятой части

// function checkMiddleValue(num1,num2){
//     return num1/2 + num2/2
// }
// let result = checkMiddleValue(1,4)
// console.log(result);

// --------------------------------------------------------------------------------

//3) Напишите функцию changeValue(arg1, arg2), которая принимает два аргумента (булевый тип, число).
//Функция, в зависимости от первого аргумента (булевого типа) изменить число по следующему правилу: 
//В случае, если первый аргумент будет true, функция должна вернуть квадрат числа. В противном случае - его корень.

// function changeValue(arg1, arg2){
// if(arg1){
//     return arg2 * arg2
// }else{
//     return Math.sqrt(arg2)//куб(1)
//     return arg2 ** (1/2)  //куб(2)
// }
// }
// let result = changeValue(false,25)
// console.log(result)

// --------------------------------------------------------------------------------

//????//4) Напишите функцию countString(arg), которая принимает в качестве аргумента строковый тип и возвращает количество букв.
//Функция должна игнорировать буквы: а, о, у, с
//*Доп задание. доработайте функцию таким образом,
// чтобы условие включало верхний и нижний регистр (А а, О о, У у, С с)

// let aoyc = "а && о && у && с"
// function countString(arg){ 
//     if(arg != aoyc)
// return arg.length

// }
// let result = countString("строка")
// console.log(result)

// function countString(string){
//     let count = 0
//     for(let i =0; i < string.length; i++){
//         count += 1
//     }
//     return count
// }
// console.log(countString("Hleb"));

// function countString(string){
//         let count = 0
//         for(let i = 0; i < string.length; i++){
//             if (string[i] !== "a" && string[i] !== "o" && string[i] !== "y" && string[i] !== "c"){
//                 count += 1
//             }
//         }
//         return count
// }
// console.log(countString("aoucy"));


//*Доп задание. доработайте функцию таким образом,
// чтобы условие включало верхний и нижний регистр (А а, О о, У у, С с)

// let string = "Hello"
// console.log(string.toUpperCase());
//---------------------------------------------------------------------------------
// function countString(string){
//     let count = 0
//     for(let i = 0; i < string.length; i++){
//         let elem = string[i].toLowerCase()
//         if (elem !== "a" && elem !== "o" && elem !== "y" && elem !== "c"){
//             count += 1
//         }
//     }
//     return count
// }
// console.log(countString("aoucyAOYCU"));
// --------------------------------------------------------------------------------

//?????//5) Напишите функцию createQuence(num), которая получает в качестве аргумента числовое значение.
//Функция должна построить последовательность строк в консоле, количество которых зависит от аргумента
// let num1 = "*"
// function createQuence(num){
//     return num = num1
// }
// let result = createQuence(1)
// console.log(result);
//-----------------------------------------------------------------------------------
// function createQuence(num){
//     for(let i = 1; i<= num; i++){
//         console.log("*");
//     }
// }
// createQuence(2) 

//------------------------------------------------------------------------------------

//  function createQuence(num){
//     for(let i = 1; i<= num; i++){
//         console.log("*".repeat(i));
//     }
// }
//     createQuence(5)

//-------------------------------------------------------------------------------------

//  function createQuence(num){
//     let star = "*"
//     for(let i = 1; i<= num; i++){
//         console.log(star);
//         star += "*"
//     }
// }
//     createQuence(5)
//-------------------------------------------------------------------------------------
