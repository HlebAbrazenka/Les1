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
// if(arg1 == true){
//     return arg2 * arg2
// }else{
//     return Math.sqrt(arg2)
// }
// }
// let result = changeValue(true,5)
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

// --------------------------------------------------------------------------------

//?????//5) Напишите функцию createQuence(num), которая получает в качестве аргумента числовое значение.
//Функция должна построить последовательность строк в консоле, количество которых зависит от аргумента
// let num1 = "*"
// function createQuence(num){
//     return num = num1
// }
// let result = createQuence(1)
// console.log(result);