let names = [
    {id: 1, name: 'Steven', image: 'https://i.ibb.co/tXqmKKR/1.png', salary: '5000'},
    {id: 2, name: 'Neena', image: 'https://i.ibb.co/yYxK3cq/2.png', salary: '10000'},
    {id: 3, name: 'John', image: 'https://i.ibb.co/SNqFDbB/3.png', salary: '4500'},
    {id: 4, name: 'Rogers', image: 'https://i.ibb.co/WnG0fVZ/4.png', salary: '3400'},
    {id: 5, name: 'Cevin', image: 'https://i.ibb.co/vdQK54J/6.png', salary: '500'},
    {id: 6, name: 'Alshey', image: 'https://i.ibb.co/wSJN6db/5.png', salary: '1210'},
    {id: 7, name: 'Milki', image: 'https://i.ibb.co/JpnDnH5/7.png', salary: '1210'},
    {id: 8, name: 'Polar', image: 'https://i.ibb.co/SnNLhgg/9.png', salary: '1210'},
    {id: 9, name: 'Grindell', image: 'https://i.ibb.co/fGH3RPW/8.png', salary: '1210'},
]

for(let elem of names){
    console.log(elem.image);
}


let div_root = document.querySelector('#root')
let btn_elem = document.querySelector('.btn')

let counter = 0
let count_title = document.createElement('h1')
div_root.append(count_title)

btn_elem.onclick = () => {
    console.log(++counter)
    count_title.innerText = counter
}

btn_reset.onclick = () => {
    counter = 0
    count_title.innerText = counter
}

btn_change.onclick = () => {
    div_root.computedStyleMap.backgroundColor = 'red'
}

document.addEventListener('click', (event) =>{
    if (event.altKey){
        console.log('click + alt');
    }
} )