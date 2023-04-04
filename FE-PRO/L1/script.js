// let a = -Infinity 
// let b = +Infinity
// let a = 10
// let b = +Infinity
// let c = NaN
// let d = "LOL"
// let e = false

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))
// console.log(typeof(e))

// const paragraph = document.getElementById("test");
// paragraph.innerText = "What can I do";
   
// console.log(paragraph.textContent);

// const ps = document.getElementsByTagName('p');
// console.log(ps);

// const pC = document.getElementsByClassName("test");
// pC[2].innerText = "Natallia";
// pC[1].innerText = "Hleb";
// pC[0].innerText = "Love";

// const pC = document.getElementsByClassName("text");
// console.log(pC);
// for (let i=0; i<pC.length; i++){
//     pC[i].innerText = i;
// }

const spec_li = document.querySelectorAll("li.spec");
for(let i = 0; i < spec_li.length; i++){
    spec_li[i].innerText = spec_li[i].textContent + "!&@"
}


const image = document.querySelector("img");
image.setAttribute("src", "https://kinogo.biz/uploads/mini/minifull/91c/1585361709-1279507493.webp");
image.setAttribute("alta","Shrek");

// const link = document.querySelectorAll("a");
// let newLink = [];
// for(key in link){
   
//     newLink.push (link[key].textContent);
// }
// console.log(newLink);






