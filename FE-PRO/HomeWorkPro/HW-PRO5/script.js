//1)Напишите функцию checkEmail(string), которая в качестве аргумента
//будет получать строковый тип. Функция должна проверить, есть ли в строке
//символ “@” и “.” Если оба символа будут находиться в строке - функция
//должна вернуть true, в потивном случае false

// function checkEmail(string, substring){
//     if(string.includes(substring)){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }
//     checkEmail("some@email.com","some@email.com")

//------------------------------------------------------------

//2)Напишите функцию initCap(string), которая получает строковое значение
//и возвращает эту же строку с заглавной первой буквой

// function initCap(string){
    
// }

//--------------------------------------------------------------
//1)Напишите функцию checkEmail(string), которая в качестве аргумента
//будет получать строковый тип. Функция должна проверить, есть ли в строке
//символ “@” и “.” Если оба символа будут находиться в строке - функция
//должна вернуть true, в потивном случае false

// function checkEmail(string){
//     if(string.includes("@") && string.includes(".") ){
//         return true
//     }else{
//         return false
//     }
// }
// let result1 =  checkEmail("some@email.com")
// let result2 =  checkEmail("some@emailcom")

// console.log(result1, result2);

//------------2-------------

//let checkEmail = (string) => string.includes("@") && string.includes(".")

// let result1 =  checkEmail("some@email.com")
// let result2 =  checkEmail("some@emailcom")

// console.log(result1, result2);


//----------------------------------------------------------------------------
//2)Напишите функцию initCap(string), которая получает строковое значение
//и возвращает эту же строку с заглавной первой буквой

// function initCap(string){
//     let firstSymbol = string.slice(0,1)
//     let otherSymbols = string.slice(1)
//     return firstSymbol.toUpperCase() + otherSymbols
// }

// let result1 = initCap('hleb')
// let result2 = initCap('natallia')

// console.log(result1, result2);

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// 3)Задан массив phones, передающий элемент HTML разметки. 
// Создайте функцию clearDataCards(array),
//  которая будет получать в качестве аргумента массив и реализует
// очистку данных. Каждый номер карты нужно переопределить, 
// заменив первые и последние 4 цифры на звездочки
// по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

// let cards = [ 
// '4000 0012 0056 9499', 
// '4000 0013 5456 7379', 
// '4000 0014 1456 9869', 
// '4000 0015 3466 7859',
// '4000 0016 3556 6899', 
// '4000 0017 4456 4699' 
// ]

// clearDataCards(cards)

// Результат
//  [ 
// '****0012 0056****, 
// '****0013 5456****', 
// '****0014 1455****, 
// '****0015 3466****,
// '****0016 3556****, 
// '****0017 4456****’
// ]
//----------------------------------------------------------------------
// let cards = [ 
// '4000 0012 0056 9499', 
// '4000 0013 5456 7379', 
// '4000 0014 1456 9869', 
// '4000 0015 3466 7859',
// '4000 0016 3556 6899', 
// '4000 0017 4456 4699' 
// ]

// function clearDateCards(array){
//     for(let i = 0; i<array.length; i++){
//         array[i] = '****'+ array[i].slice(5,14) + '****'
//     }
//     console.log(cards);
// }
// clearDateCards(cards)

//------------------------------------------------------------------------
// Задан массив elems, передающий элемент HTML разметки. 
// Создайте функцию clearData(array), 
// которая будет получать в качестве аргумента массив и реализует
// очистку данных по примеру ниже (должна вывести в консоль МАССИВ,
//  а не элементы массива):

// let elems = [
// '<div><p class="text">Home</p></div>', 
// '<div><p class="text">About</p></div>', 
// '<div><p class="text">FAQ</p></div>', 
// '<div><p class="text">Contacts</p></div>' 
// ] 

// clearData(array)

// 	Результат: ['Home','About','FAQ','Contacts']

    
// let elems = [
//     '<div><p class="text">Home</p></div>', 
//     '<div><p class="text">About</p></div>', 
//     '<div><p class="text">FAQ</p></div>', 
//     '<div><p class="text">Contacts</p></div>' 
//     ] 

//     function clearData(array){
//         for(let i = 0; i < array.length; i++){
//             let index = array[i].indexOf('<', 20)
//         array[i] = array[i].slice(21,index)
//         console.log(array[i]);
//     }
// }

// clearData(elems)

// let elems = [
//     '<div><p class="text">Home</p></div>', 
//     '<div><p class="text">About</p></div>', 
//     '<div><p class="text">FAQ</p></div>', 
//     '<div><p class="text">Contacts</p></div>' 
//     ] 

//     function clearData(array){
//         for(let i = 0; i < array.length; i++){
//             let index = array[i].indexOf('</p>')
//         array[i] = array[i].slice(21,index)
//         console.log(array[i]);
//     }
// }

// clearData(elems)

//--------------------------------------------------------------------------------

// let elems = [
//     '<div><p class="text">Home</p></div>', 
//     '<div><p class="text">About</p></div>', 
//     '<div><p class="text">FAQ</p></div>', 
//     '<div><p class="text">Contacts</p></div>' 
//     ] 

//     function clearData(array){
//         for(let i = 0; i < array.length; i++){
//             let index = array[i].indexOf('</p>')
//         array[i] = array[i].slice(22,index)
//         console.log(array[i]);
//     }
// }

// clearData(elems)
