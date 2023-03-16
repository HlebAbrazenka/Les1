let elements = document.querySelectorAll("li");


// for(let i=0; i<elements.length; i++){
//     console.log(elements[i].innerText);
// }
console.log(elements);

for(let elem of elements){
    let list_text = prompt("Enter the text");
    elem.innerText = list_text;
}