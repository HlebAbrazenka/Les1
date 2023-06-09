//1) Задан объект someObj с произвольными сво-ми.
// Напишите функцию getKeys(), которая в качестве
// аргумента получает объект и возвращает результат согласно примеру ниже:

// Примечание: Использовать класс Object нельзя.

// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// Результат: ['key1','key2','key3','key4']
//----------------------------------------------------------------------------

// let someObj = {
// key1: '1',
// key2: '2',
// key3: '3',
// key4: '4',
// }
// let result = []
// function getKeys(obj) {
//     for(let elem in someObj){
//        result.push(elem)
// }
// return console.log(result);
// }
// getKeys()

//----------------------------------------------------------------------------
//2)Создайте функцию getAvg(), которая получает в качестве аргумента
// массив и возвращает среднее значение среди всех элементов.
// Примечание: гарантируется, что все элементы передают числовое значение
//Пример: [1,2,3,4,5]
//Результат: 3
//----------------------------------------------------------------------------


// function getAvg(array) {
// let sum = 0
// for(i = 0; i < array.length; i++) {
// sum += array[i];
// } 
// sum = sum / array.length;
// return sum.toFixed(1);       //toFixed - преобразования числа в строку
// }   
// console.log(getAvg([1,2,3,4,5]));


// let sum = 0
// function getAvg(array){
//     for(let elem in array){
//         sum += array[elem]/array.length;
//     }
//     return sum
// }
// console.log(getAvg([1,2,3,4,5]));





//-----------------------------------------------------------------------------
//3)Создайте функцию countString(), которая получает массив в качестве аргумента.
//Реализуйте функционал, который посчитает и выведет в консоль количество элементов,
// чей тип равен ‘string’
// Пример: [1,true,'3','value1',9,'key']
// Результат: 3
//-------------------------------------------------------------------------------


// let arr = [1,true,'3','value1','9','key']
// let sum = 0
// function countString(arr){
// for(let elem of arr){
//     if(typeof(elem) === 'string'){
//      sum += 1;
//     //  console.log(sum);
//     }
// }
//    return console.log(sum);
// }
// countString(arr)

// let array = ['1',true,'3','value1',9,'key']
// let result = 0

// function counterString(array){
//     for (let elem of array){
//         if (typeof(elem) === 'string'){
//             result += 1;
//         }
//     }
//     return console.log(result);
// }
// counterString(array)


// function countString(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'string') {
//         count++;
//       }
//     }

//     console.log(count);
//   }
//   const array = [1, true, '3', 'value1', '9', 'key'];
// countString(array); // Вывод: 3

// let array = [1,'true','3','value1',9,'key']

// function countString(arr){
//     for(let elem in array){
//         if(typeof array[elem] === "string"){
//             return array[elem]
//         }
//     } 
// }
// console.log(countString(array))

// let sum1 = [1,true,'3','value1',9,'key'];
// function countString(arr){
//     for(let elem in sum1){
//         if(typeof (elem) === "string"){
//             console.log(elem)
//         }
//     }
// }
// countString(sum1)




//--------------------------------------------------------------------------------
//4)Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(),
// которая в качестве аргумента получает объект и возвращает результат  согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }
// Примечание: Использовать класс Object нельзя

// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]
//-----------------------------------------------------------------------------------


// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }
// let result = []
// function getEntries(obj){
//     for(let elem in obj){
//     result.push([elem, obj[elem]])
//     }
//     return result 
// }
// console.log(getEntries(someObj));

//-------------------------------------------------------------------------------------
//5)Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять
// строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

// Пример: [1,true,'3','value1',9,'key']
// 	Результат: 
// 	{
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }
//----------------------------------------------------------------------------------------


//   array = [1,true,'3','value1',9,'key', 0];

//   function arrayToObject(arr) {
//       let obj = {};
//       for (let i = 0; i < arr.length; i++) {
//         obj['key' + (i + 1)] = arr[i];
//       }
//       return obj;
//     }
//     let  result = arrayToObject(array);
//     console.log(result);


const array = [1,true,'3','value1',9,'key', 0];
function object(){
let obj = {}
for(let elem in array ){
 obj['key'+ ++elem]  = array[elem -1] 
}
console.log(obj);
return obj 
}
object()

//-----------------------------------------------------------------------------------------



