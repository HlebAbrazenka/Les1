// // 1) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'.//
// let a = 10;
// if (a > 0, a < 5){
//     console.log("True");
// }
// else{
//     console.log("False");
// }

//2)Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите в косноль 'Неверно'.//
// let a = 3;
// let b = 7;
// if (a > 2, a < 11, b >= 6, b < 14){
//     console.log("True")
// }else{
//     console.log("False")
// }

//3)В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). Ответ выведите в консоль//
// let month = 100;
// if (month >= 1, month == 12, month < 3){
//     console.log ("Winter");
// }
// else if (month >= 3, month < 6){
//     console.log("Spring");
// }
// else if (month >= 6, month < 9){
//     console.log("Summer");
// }
// else if (month >= 9, month < 12){
//    console.log("Autumn")
// }
// else{
// console.log("FALSE-NOT A MONTH")
// }

//4)В программе объявлены три переменные a, b и c, в которые записаны числовые значения. Определите максимальное значение и выведите его в консоль.
//Методом max пользоваться нельзя.
// let a = 0;
// let b = 10;
// let c = 10;
// if (a > b, a > c){
//     console.log(`${a}`)
// }
// else if (b > a, b > c){
//     console.log(`${b}`)
// }
// else if (c > a, c > b){
//     console.log(`${c}`)
// }
// else{
//     console.log("False")
// }

// //5)В программе объявлены три переменные: a, b и sign. Переменные a и b хранят численное значение. Переменная sign - строковое значение,
// // которое отражает математический знак, например: (+,-,/,*). Необходимо написать простой калькулятор,
// // который в зависимости от значения переменной sign будет совершать соответствующие математические операции с переменными a и b.
// // В случаи попытки поделить на 0 программа должна выводить в консоль сообщение: “делить на 0 нельзя”.
// let a = Number (10);
// let b = Number (10);
// let sign = " * "

// if (sign = " * "){
//     console.log(a * b); 
// }
// if (sign = " + "){
//     console.log(a + b)
// }
// if (sign = " - "){
//     console.log(a - b)
// }
// if (sign = " / " , b != 0){
//     console.log(a / b)
// }
//  else{
//     console.log("делить на 0 нельзя");
// }

// //6)В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу
// let temp = Number (15)
// let weather = "clear"
// let activity = ""

// if (temp >= 25, weather = "clear"){
// console.log(activity = "golf")
// }
// else if(temp >= 10, temp <25, weather = "clear"){
//     console.log(activity = "bowling")
// }
// else{
//     console.log(activity = "hikking")
// }