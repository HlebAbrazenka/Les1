//Ошибка
// let test = function double(num){
//     return num**2
// }
// console.log(double(5)
//--------------------------------------
//Анонимная(безымянная) функция
// let double = function(num){
//     return num**2
// }
// console.log(double(5));
//-----------------------------------------

//Стрелочная функция
// let double = (num) => num **2
// console.log(double(5));
//-----------------------------------------

function getLastFirst(string) {
  let result = string[0] + string[string.length-1]
  return result
}
console.log(getLastFirst("Hello"));
console.log(getLastFirst("Oleh"));
console.log(getLastFirst("Hleb"));
