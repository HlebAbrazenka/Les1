// Написать цикл, который выводит только чётные числа
// [1,5,8,4,7,6,2,9]
// let array = [14,1,5,8,4,7,6,2,9,3,10,12]
// for (let i = 0; i < array.length; i+=1){
//     if(array[i] % 2 === 0){
//         console.log(array[i])
//     }  
// }
 //-------------------------------------------------
 
//Написать цикл, который выводит только положительные числа
//и считает их сумму [1,2,3,4,5,-5,-8]
// let array = [1,2,3,4,5,-5,-8];
// let sum = 0;
// for (let i=0; i<array.length; i+=1){
//     if(arrey[i] > 0){
//         sum = sum + array[i];
//     }
// }
// console.log(sum);
//----------------------------------------------------

//Написать цикл, который выводит сумму чисел, чей индекс
//равен значению элемента [0,1,3,5,4,6,5]
//let array = [0,1,3,5,4,6,5];
//let array = [0,1,2,3,4,5];
// let sum = 0;
// for(let i=0; i<array.length; i+=1){
//     if(array[i]=== i){
//         sum = sum + i;
//     }
// }
// console.log(sum);
//----------------------------------------------------
// Написать цикл, который выводит
// минимальное и максимальное число

// let array = [1,2,3,5,8,9,52,-9,-6,10]
// let max = -Infinity
// let min = Infinity
// for(let i=0; i<array.length; i+=1){
//     const arrayElement = array[i];
//     if(arrayElement > max){
//         max = arrayElement;
//     }
//     if(arrayElement < min){
//         min = arrayElement;

//     }
// }
// console.log('min =', min, ';', 'max =', max);

// let array = [1,2,3,100,5,8,9,-100,52,-9,-6,10];
// let max = 1;
// let min = 1;
// for(let i = 0; i <array.length; i+=1){
//     if(array[i] > min){
//         min = array[i];
//     }
//     if(array[i] < max){
//         max = array[i]
//     }
// }
// console.log('min =', min, ';', 'max =', max);
//---------------------------------------------------------
//Нужно найти сумму чётных и нечётных чисел из массива и
//вывести разницу между ними. Вычесть из большего - меньшее.

// const arr = [1,2,3,5,10,46,11,20]
// let sumOfEven = 0;
// let sumOfOdd = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//         sumOfEven += arr[i];
//     }
//     if(arr[i] % 2 != 0){
//         sumOfOdd += arr[i];
// }
// }
// if(sumOfEven > sumOfOdd){
//     console.log(sumOfEven - sumOfOdd)
// }else{
//     console.log(sumOfOdd - sumOfEven);
// }
//---------------------------------------------------------
//Перевернуть массив [1,2,3,4,5]

// const num = [1,2,3,4,5];
// for(let i = num.length-1; i>=0; i--){
//     console.log(num[i]);
// }

// const num = [1,2,3,4,5];
// const newNum = [];
// for(let i = num.length-1; i>=0; i--){
//     newNum.push(num[i]);
//  }
//     console.log(newNum);

//-----------------------------------------------------------
//Выведите имя и возраст человека в массиве объектов в виде строки

// let array = [{name: 'Alice', age: 30 },
//  {name: 'Bob', age: 25 },
//  {name: 'Charlie', age: 35 },
// ]
// for(let i=0; i<array.length; i++){
//     let element = array[i];
//     console.log(`${element.name} ${element.age}`);
//     console.log(element.name + " " + element.age);
// }

//----------------------------------------------------------------
//Создайте массив объектов, содержащий квадраты чисел от 1 до 10
//Пример первого объекта: {number: 1, square: 1}

// const arr = []
// for(let i=1; i < 11; i++){
//     arr.push({number:i, square:i**2})
// }
// console.log(arr);

//-----------------------------------------------------------------
//Найти общую сумму цен всех товаров из следующего массива

// const array = [
//     {name: "Laptop", price: 1200},
//     {name: "Mouse", price: 20},
//     {name: "Keybord", price: 50},
//     {name: "Monitor", price: 300},
// ];
// let result = 0

// for (let i = 0; i < array.length; i++){
//     //result = result + array[i].price
//     result += array[i].price
// }
// console.log(result);

//-------------------------------------------------------------------
//На основе массива продуктов создать новый массив, где
//только продукты дороже 100

// let newfoods = [];
// const foods = [
//     {name: "Laptop", price: 1200},
//     {name: "Mouse", price: 20},
//     {name: "Keybord", price: 50},
//     {name: "Monitor", price: 300},
// ];
// for(let i=0; i<foods.length; i++){
//     if(foods[i].price > 100){
//         newfoods.push(foods[i]);
//     }
// }
// console.log(newfoods);

//-------------------------------------------------------------------------
//Создать функцию power, которая принимает 2 числа, как аргумент.
//Первое число - основание, второе число - степень.
//Функция возвращает результат арифмитичнского действия
//пример: power(2,3) => 8 (не использовать **)

// function power(num1, num2){
//     let total = 1
//     for(let i=0; i<num2; i++){
//         total *= num1
//     }
//     return total;
// }
// console.log(power(3,3));

//---------------------------------------------------------------------------
//--------------------Функция как аргумент----------------------------

// function summ(a,b){
//     return a+b;
// }
// function diff(a,b){
//     return a-b;
// }
// function doSomething(func){
//     let x =10
//     let y =15
//     let result = func(x,y)
//     console.log(result);
// }
// doSomething(summ);
// doSomething(diff);
//---------------------------------------------------------------
//-----------Самовызывающаяся функция(IIFE)----------------------
//1)//
// (function sayHi(){
//     console.log("Hi!");
// })()

//2)//Самовызывающаяся функция(IIFE)-анонимная-------------------
// (function (){
//     console.log("Hi!");
// })()

//3)-------------------------------------------------------------
// (function summ(a,b){
//     console.log(a+b);
// })(10,15)

//---------------------------------------------------------------
//-------------Стрелочная функция--------------------------------
// const arrSayHi = (name) => {
//     console.log(`Hi, ${name}! How are you?`);
// }
// arrSayHi("Hleb")

//---------------------------------------------------------------
//-------------Массивы-------------------------------------------
// const num = [1,2,3,4,5]
// console.log(num);      //массив
// console.log(num [0]); //порядковый номер элеманта массива
// console.log(num[3]);  //порядковый номер элеманта массива
// console.log(num.length);  //длина массива

//---------------------------------------------------------------
//-------------Циклы---------------------------------------------
// console.log("start");
// for(let i = 0; i < 5; i+=2){
// console.log(i);
// }
// console.log("finish");
//----------Обход массива циклом for-----------------------------
// const numb = [1,2,3,4,5]
// console.log(numb [0]);
// console.log(numb [1]);
// console.log(numb [2]);
// console.log(numb [3]);
// console.log(numb [4]);
//------------^------------
// const numb = [1,2,3,4,5]
// for(i = 0; i < numb.length; i++){
// console.log(numb[i]);
// }
//------------+-------------
// const numb = [1,2,3,4,5]
// for(i = 0; i < 5; i++){
// console.log(numb[i]);
// }
//--------------------------------------------------------------
//--------------------------------------------------------------
//Напишите функцию changeValue(arg1, arg2), которая принимает два аргумента (булевый тип, число).
//Функция, в зависимости от первого аргумента (булевого типа) изменить число по следующему правилу: 
//В случае, если первый аргумент будет true, функция должна вернуть квадрат числа. В противном случае - его корень.

// function changeValue(arg1, arg2){
// if(arg1){
//     return arg2 * arg2
// }else{
//     return Math.sqrt(arg2)//или куб(1)
//     return arg2 ** (1/2)  //или куб(2)
// }
// }
// let result = changeValue(false,25)
// console.log(result)
//----------------------------------------------------------------
// function changeValue(arg1, arg2){
//     return (arg2) ? arg1 ** 2 : arg2 ** 0,5
// }
// let result = changeValue(true,25)
// console.log(result);
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//Напишите функцию countString(arg), которая принимает в качестве аргумента строковый тип и возвращает количество букв.
//Функция должна игнорировать буквы: а, о, у, с


// function countString(string){
//     let count = 0
//     for(let i =0; i < string.length; i++){
//         count += 1
//     }
//     return count
// }
// console.log(countString("Hleb"));
//--------------------------------------------------------------------
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
//---------------------------------------------------------------------
// function countString(string){
//         let count = 0
//         for(let i = 0; i < string.length; i++){
//             let elem = string[i].toLowerCase()
//             if (elem !== "a" && elem !== "o" && elem !== "y" && elem !== "c"){
//                 count += 1
//             }
//         }
//         return count
// }
// console.log(countString("aoucyAOYCU"));
//------------------------------------------------------------------------
//----Изменяет строчные на заглавные буквы (а=>A)
// let string = "Hello"
// console.log(string.toUpperCase());

//-------------------------------------------------------------------------
//Напишите функцию createQuence(num), которая получает в качестве аргумента числовое значение.
//Функция должна построить последовательность строк в консоле, количество которых зависит от аргумента

// function createQuence(num){
//     for(let i = 1; i<= num; i++){
//         console.log("*");
//     }
// }
// createQuence(2)

//-------------------------------------------------------------------------
// function createQuence(num){
//     for(let i = 1; i<= num; i++){
//         console.log("*".repeat(i));
//            }
//        }
//    createQuence(5)  
//--------------------------------------------------------------------------

// function createQuence(num){
//     let star = "*"
//     for(let i = 1; i<= num; i++){
//         console.log(star);
//         star += "*"
//     }
// }
//     createQuence(5)
//---------------------------------------------------------------------------
// function plus(){
//     let counter="*"
//     return function(){
//         counter +="*"
//         console.log(counter);
//     }
// }
// let plus1 = plus()
// console.log(plus1);
// plus1()
// plus1()
// plus1()
//не вышел
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
//-----------Обход массива циклом for ( of )
// const autoBrands = ['Audi', 'BMW', 'Mers','WV'];

// for(let item of autoBrands){  //item=random(отвечает за каждый элемент массива)
//     console.log(item);
// }
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
//---------------Обход массива методом  forEach()
// const autoBrands = ['Audi', 'BMW', 'Mers','WV'];

// autoBrands.forEach(function(item, index){
//     console.log(`${item} * ${index}`);   //"*","item", "index" = random
// })
//----------------------------------------------------------------------------
//---Обход массива методом через функцию  forEach()
// const autoBrands = ['Audi', 'BMW', 'Mers','WV'];

// autoBrands.forEach(printBrand);

// function printBrand (item, index){
//      console.log(`${item} * ${index}`); //"*","item", "index" = random
// }
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
//------------------Объекты----------------------------------------------------
// let userName = "Natallia";
// let age = 30;
// let isMarried = true;

// const person = {
//     userName: "Natallia",
//     age: 30,
//     isMarried: true,
//     profession: "Doktor"
// }

// console.log(person);
// console.log(person.userName);
// console.log(person["age"]);

// let propertyName = "profession"
// console.log(person[propertyName]);

// person.sex = "Woman"
// console.log(person);

// delete person.age;   //удаляет часть объекта
// console.log(person); //тут age
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
