// ------------------------------------------------------------
//let users = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'Natali'},
//     {id: 3, name: 'Hleb'},
// ]----Копия массивов (объектов)
//---------------Не глубокое/глубокое копирование

// let a = [1,2,3,4,5]
// let b = a.slice()
// console.log(a===b); //false

//-------------------------------------------

// 
// console.log(users[0].name);   //Alex
// console.log(users[2].id);       //3

//----------------------------------------------------------

// let users = [
//     {id: 1, name: 'Alex'},
//     {id: {
//         salary: 2000,
//         isJob: {
//             isGet: true
//         }
//     }, name: 'John'},
//     {id: 3, name: [1,2,[9,10]]}
// ]


// console.log(users[1].id.isJob.isGet)   //true

//---------------------------------------------------------------
// let users = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'Natali'},
//     {id: 3, name: 'Hleb'},
// ]
// let users_copy = users.slice()    
// users_copy[2].id = 100

// console.log(users);
// console.log(users_copy);

 //ответ//           [
//                 { id: 1, name: 'Alex' },
//                 { id: 2, name: 'Natali' },
//                 { id: 100, name: 'Hleb' }
//                    ]
//                 [
//                 { id: 1, name: 'Alex' },
//                 { id: 2, name: 'Natali' },
//                 { id: 100, name: 'Hleb' }
//                 ]
//                

//----------------------------------------------------------------------

//--------------Деструктуризирующее присвоение (Деструктуризация)

// let = [a,b,c] = [10,20,30]
// console.log(a);  //10
// console.log(b);  //20
// console.log(c);  //30

//------------------------------------------------------------
// let [one,two,three] = [1,2,3]
// console.log(one)       //1
// console.log(two)       //2
// console.log(three)     //3

// 1 часть - всегда/только строчный тип

//-------------------------------------------------------------
// let products = [
//     ['Cамокат', 400],
//     ['Велосипед', 1000],
//     ['Ролики', 540],
//     ['Ракетки', 670]
// ]


// console.log(products[1]);
// for(let elem of products){
//     console.log(elem[1] * 0.8);

// } //Ответ(выводит цену -20%):  //320
//                                //800
//                                //432
//                                //536

