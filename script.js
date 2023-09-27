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

let totalElement = document.getElementsByClassName('total');

function total() {
    let price = Array.from(document.getElementsByClassName('price'));
    let quantity = Array.from(document.getElementsByClassName('quantity'));

    for(let i = 0; i < price.length; i++){            
        let p = parseInt(price[i].textContent);
        let q = parseInt(quantity[i].value);
        totalElement[i].innerHTML = "Rs. " + p*q;
    }
    calculate_subtotal();
}      

function calculate_subtotal() {
    let subtotal = 0;

    for(let i = 0 ; i < totalElement.length; i++){
        subtotal = subtotal + parseInt(totalElement[i].textContent.replace(/\D/g, ''));
    }
    
    let cart_total = subtotal + parseInt(document.getElementById('shipping_charges').textContent);
    
    document.getElementById('sub_total').innerHTML = subtotal;
    document.getElementById('cart_total').innerHTML = cart_total;
}

window.onload = function() {
    total();
    calculate_subtotal();
}