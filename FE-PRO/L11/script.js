//Напишите функцию checkEven(array,callback), которая получает в качестве аргумента
// массив и колбек-функцию. Функция должна проверить, удовлетворяют ли все элементы
// массива указанному условию колбека. Если найдется хотя бы 1 элемент,
// который не будет удовлетворять условию, функция должна вернуть сообщение
// “Не все элементы удовлетворяют указанному условию”, в противном случае
// “Все элементы удовлетворяют указанному условию”.
// Колбек в качестве аргумента должен передавать значение элемента.

// let array = [1,2,3,4,5]

// function checkEven(array, callback) {
//     for(let i = 0; i < array.length; i++){
//         if(!callback(array[i])){
//             return "Не все элементы удовлетворяют указанному условию"
//         }
//     }
//     return "Все элементы удовлетворяют указанному условию"  
// }
// let result = checkEven(array, (elem => elem < 5))
// console.log(result);

//----------------------------------------------------------------------
// Напишите функцию checkSome(array,callback), которая получает в качестве аргумента массив
// и колбек-функцию. Функция должна проверить, удовлетворяют ли хотя бы 1 элемент
// массива указанному условию колбека. Если все элементы не будут удовлетворять условию,
// функция должна вернуть сообщение “Ни один элемент не удовлетворяют указанному условию”,
// в противном случае “Минимум 1 элемент удовлетворяет указанному условию”.
// Колбек в качестве аргумента должен передавать значение элемента.

// let array = [1,2,3,4,5]

// function checkSome(array, callback) {
//     for(let i = 0; i < array.length; i++){
//         if(callback(array[i])){
//             return "Минимум 1 элемент удовлетворяет указанному условию"
//         }
//     }
//     return "Ни один элемент не удовлетворяют указанному условию"  
// }
// let result = checkSome(array, (elem => elem === 0))
// console.log(result);

//------------------------------------------------------------------------

//console.log('hello'.repeat(2));

//-------------------------------------------------------------------------

// let string = "hello my friend!"
// let result = string.includes("O my F")

// console.log(result);

//------------------------------------------------------------
// let string = "hello"
// function checkString(string, substring) {
// if(string !== substring){
// console.log("Данной подстроки нет в строке");
// }else{
//     console.log("Данная подстрока сущесвтует в строке");
// }
// }
// checkString("hello world", "o w")
//------------------------------------------------------

// function checkString(string, substring) {
//     if(string.includes(substring)){
//         console.log("Данная подстрока сущесвтует в строке");
//     }else{
//         console.log("Данной подстроки нет в строке")
//     }
// }
// checkString("Hello world!", "o worl!")

//---------------------------------------------------------------

// let string = 'date 10.10.10 date 20.20.20 date 30.30.30'
// let result = string.indexOf("date 2")
// // let result = string.indexOf("date", 2)
// console.log(result);

let string = '10.10.10.10.10.10 date 20.20.20 date 30.30.30 date'
let result = string.indexOf("date", string.indexOf("date") + 1)
console.log(result);