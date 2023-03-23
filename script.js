const bar = document.getElementById('bar');
const nav = document.getElementById("navbar");

function asd()
{
    console.log(bar);
};

bar.addEventListener('click', function(){
    alert(nav);
});
nav.classList.add('active');
