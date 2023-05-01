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


