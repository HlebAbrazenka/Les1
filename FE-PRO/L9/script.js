// function double(){
//     return "test"
// }
// let a = double
// console.log(a);

// function handle(callback){
//     let a = callback()
//     console.log(a);
// }
// handle(1)

// function handle(callback){
//     let a = callback()
//     console.log(a);
// }
// handle(()=> "test")
// handle(() => "STRING!")

//-------------------------------------------------
// function getCandition(a, b, sign){
//     if (sign === ">"){
//         console.log((a>b) ? "True" : "False")
//     }else if(sign === "<"){
//         console.log((a<b) ? "True" : "False")
//     }else if(sign === "=="){
//         console.log((a==b) ? "True" : "False")
//     }else if(sign === "!="){
//         console.log((a!=b) ? "True" : "False")
//     }else{
//         console.log("неизвестный знак сравнения");
//     }
// }
// getCandition(10,20,">=")
// getCandition(10,20,"<")
// getCandition(10,20,">")

//-----------------------OR--------------------
// function getCandition(callback){
//     if(callback()){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }
// getCandition(() => 10 > 100)
// getCandition(() => 10 > 100 || 10 > 60)
// getCandition(() => isNaN(NaN))

//------------------------------------------------
// function calc(callback){
//     let result = callback()
//     console.log(result);
// }
// calc(() => 10 * 10/2)

// function calc(callback){
//     let result = callback()
//     return result
// }
// let a = calc(() => 10/10*10**2)
// console.log(a);

//---------------------------------------------------
// function handle(callback){
//     let a = callback(10)
//     console.log(a)
// }
// handle((a) => a **2)

// function handle(callback){
//     let a = callback(10,2)
//     console.log(a)
// }
// handle((a,b) => a ** b)

// function test(a,b){
//     console.log(10);
// }
// test(50,100)

// function handle(callback){
//     let result = callback(10,2)
//     console.log(result)
// }
// handle((a,b) => b + 10)
// handle((b) => b + 10)

// ----------Замыкание----------------------------
// function handle(){
//     console.log('test');
//     return function(){
//         console.log(10);
//     }
// }
// let a = handle()
// a()

//---------------------------------------------------

// function getCounter(){
//     let counter = 0
//     return function(){
//         counter += 1
//         console.log(counter)
//     }
// }
// let count1 = getCounter()
// count1()
// count1()
// count1()

//-----------------------------------------------------

// function getCounter(){
//     let counter = 0
//     return function(){
//         counter += 1
//         console.log(counter)
//     }
// }
// let count1 = getCounter()
// let count2 = getCounter()

// console.log("count1")
// count1()
// count1()
// count1()
// count1()
// count1()

// console.log("count2")
// count2()
// count2()
// count2()

//---------------------------------------------------

// function getUrl(domen){
//     return function(url){
//         console.log(`${url}.${domen}`)
//     }
// }
// const domenCom = getUrl("com")
// const domenNet = getUrl("net")

// domenCom("google")
// domenCom("mail")
// domenCom("facebook")
// domenNet("alibaba")