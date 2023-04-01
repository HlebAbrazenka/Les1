// 1) Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.

// let strings = ['Love is a beautiful feeling, and we need to express it often. You should always let her know how deep your love is for her. If you are pondering what to say to your loved ones, you are welcome on this page. We"ve compiled a list of beautiful love messages for you to send to the one you care about. These are the best love words that will help you express your beautiful love.'];

// let strings2 = ['*♥*'];


//      let paragraph = document.createElement('p');
//      paragraph.classList.add = ('p0');
//      let paragraph1 = document.createElement('p');
//      paragraph1.classList.add = ('p1');
//      let paragraph2 = document.createElement('p');
//      paragraph2.classList.add = ('p2');
//      let paragraph3 = document.createElement('p');
//      paragraph3.classList.add = ('p3');
//      let paragraph4 = document.createElement('p');
//      paragraph4.classList.add = ('p4');


//      paragraph.innerText = strings;
//      paragraph1.innerText = strings;
//      paragraph2.innerText = strings;
//      paragraph3.innerText = strings;
//      paragraph4.innerText = strings;

//      document.body.append(paragraph,paragraph1,paragraph2,paragraph3,paragraph4);

//              function starsLove(){   
//              paragraph.innerText = strings2;
//             }
//              paragraph.addEventListener('click', starsLove);
//              function starsLove1(){   
//              paragraph1.innerText = strings2;
//             }
//              paragraph1.addEventListener('click', starsLove1);
//              function starsLove2(){   
//              paragraph2.innerText = strings2;
//             }
//              paragraph2.addEventListener('click', starsLove2);
//              function starsLove3(){   
//              paragraph3.innerText = strings2;
//             }
//              paragraph3.addEventListener('click', starsLove3);
//              function starsLove4(){   
//              paragraph4.innerText = strings2;
//             }
//              paragraph4.addEventListener('click', starsLove4);

//------------------------------------------------------------------------------------------------------------------------//

//  2) Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
//  3) Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся. 
     
    // let block1 = document.createElement('div');
    // block1.classList.add('block')
    // block1.innerText = '0';
    // block1.style.textAlign = 'center';
    // block1.classList.toggle('active');

    // let block2 = document.createElement('div');
    // block1.classList.add('block')
    // block1.innerText = '1';
    // block1.style.textAlign = 'center';
    // block1.classList.toggle('active');

    // let block3 = document.createElement('div');
    // block1.classList.add('block')
    // block1.innerText = '2';
    // block1.style.textAlign = 'center';
    // block1.classList.toggle('active');

    // let block4 = document.createElement('div');
    // block1.classList.add('block')
    // block1.innerText = '3';
    // block1.style.textAlign = 'center';
    // block1.classList.toggle('active');

    // let block5 = document.createElement('div');
    // block1.classList.add('block')
    // block1.innerText = '4';
    // block1.style.textAlign = 'center';
    // block1.classList.toggle('active');

    // let block6 = document.createElement('div');
    // block1.classList.add('block')
    // block1.innerText = '5';
    // block1.style.textAlign = 'center';
    // block1.classList.toggle('active');

    // let block7 = document.createElement('div');
    // block1.classList.add('block')
    // block1.innerText = '6';
    // block1.style.textAlign = 'center';
    // block1.classList.toggle('active');

    // let block8 = document.createElement('div');
    // block1.classList.add('block')
    // block1.innerText = '7';
    // block1.style.textAlign = 'center';
    // block1.classList.toggle('active');

    // let block9 = document.createElement('div');
    // block1.classList.add('block')
    // block1.innerText = '8';
    // block1.style.textAlign = 'center';
    // block1.classList.toggle('active');

    // let block10 = document.createElement('div');
    // block1.classList.add('block')
    // block1.innerText = '9';
    // block1.style.textAlign = 'center';
    // block1.classList.toggle('active');

    //      document.body.append(block1, block2, block3, block4, block5, block6, block7, block8, block9, block10);

    //          function myFunction(){ 
    //          block1.classList.toggle('active');
    //          }
        
    //          block1.addEventListener('click', myFunction);
        
    //          function myFunction1(){ 
    //          block2.classList.toggle('active');
    //          }
        
    //          block2.addEventListener('click', myFunction1);
        
        
    //          function myFunction2(){ 
    //          block3.classList.toggle('active');
    //          }
        
    //          block3.addEventListener('click', myFunction2);
        
    //          function myFunction3(){ 
    //          block4.classList.toggle('active');
    //          }
        
    //          block4.addEventListener('click', myFunction3);
        
    //          function myFunction4(){ 
    //          block5.classList.toggle('active');
    //          }
        
    //          block5.addEventListener('click', myFunction4);
          
    //          function myFunction5(){ 
    //          block6.classList.toggle('active');
    //          }
        
    //          block6.addEventListener('click', myFunction5);
        
    //          function myFunction6(){ 
    //          block7.classList.toggle('active');
    //          }
        
    //          block7.addEventListener('click', myFunction6);
        
    //          function myFunction7(){ 
    //          block8.classList.toggle('active');
    //          }
        
    //          block8.addEventListener('click', myFunction7);
        
    //          function myFunction8(){ 
    //          block9.classList.toggle('active');
    //          }
        
    //          block9.addEventListener('click', myFunction8);
        
    //          function myFunction9(){ 
    //          block10.classList.toggle('active');
    //          }
        
    //          block10.addEventListener('click', myFunction9);
    //------------------------------------------------------------------------------------//

        
// 5) Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно. Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на карточку один параграф получает класс с display none а второй с display block.  6. Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на русский или английский соответственно.// 
// 6) Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на русский или английский соответственно.

//  let array1 = ['One ', ' Two ', ' Three ', ' Four ', ' Five '];

//  let paragraph = document.createElement('p');

//  paragraph.classList.add('paragraph1')

//  let array2 = [' Один ', ' Два ', ' Три ', ' Четыре', ' Пять '];

//  let paragraph2 = document.createElement('p');

//  paragraph2.classList.add('paragraph2')

//  document.body.append(paragraph);

//  document.body.append(paragraph2);

//  let button1 = document.createElement('button');

//      button1.innerText = 'RUS';

//      button1.classList.add = ('RUS');

//  let button2 = document.createElement('button');

//      button2.innerText = 'ENG';

//      button2.classList.add = ('ENG');
    
//  document.body.after(button1, button2);

//  paragraph2.innerText = array2;


//  function сlick() {

//      let paragraph1 = document.querySelector('.paragraph1');
//      let paragraph2 = document.querySelector('.paragraph2');
   
//      if (paragraph1.style.display =='none') {
//        paragraph1.style.display = 'block';
//        paragraph2.style.display = 'none';
//        paragraph2.innerText = array2;
//      } else {
//        paragraph1.style.display = 'none';
//        paragraph2.style.display = 'block';
//        paragraph.innerText = array1;
//      }
//      }

//       button1.addEventListener('click',сlick);
//       button2.addEventListener('click',сlick);

// //---------------------------------------------------------------------------------------------------------


// 7) Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

// let blockDiv = document.querySelector('blockDiv');

//  let red = 128;
//  let green = 128;
//  let blue = 0;

//  for (let i = 0; i <= 52; i++) {
  
//    let div = document.createElement('div');
//    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//    div.style.margin = '0 auto';
//    div.style.height = '100px';
//    div.style.width = '1500px';
//    blue += 5;

//  document.body.append(div);
//  }
//  //----------------------------------------------------------------------------------------------------------------