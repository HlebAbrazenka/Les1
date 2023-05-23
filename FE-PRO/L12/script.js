//String.slice(n,m) - метод, который возвращает часть строки
 //от n индекса до m индекса не включительно

//  let string = 'Hello my friend'
//  let result = string.slice(-3)
//  console.log(result);

//------------------------------------------------------------------
// let string = 'Hello my friend'
// let result = string.substring(2,9)
// console.log(result);
//------------------------------------------------------------------
let phones = [
    '+79123456789',
    '89123456589',
    '89123456489',
    '+79123456389',
    '89123456289',
    '+79123456189',
]
function clearNumb(array){
    for(let i = 0; i < array.length; i++){
        let index = array[i].indexOf('+')
    array[i] = array[i].slice(0,index)
    console.log(array[i]);
}
}
clearNumb(phones)
