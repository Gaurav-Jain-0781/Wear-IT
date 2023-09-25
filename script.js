const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', ()=>
        {nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>
        {nav.classList.remove('active');
    })
}

let price = document.getElementsByClassName('price').value;
let quantity = document.getElementsByClassName('quantity').value;
console.log(typeof(quantity));

function calculate() {
    
}