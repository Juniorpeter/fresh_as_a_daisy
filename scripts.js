document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.navbar .fa');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
    });
});

const headbar = document.querySelector('.fa-bars');
const cross = document.querySelector('#badcross');
const headerbar = document.querySelector('.headerbar');

headbar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    cross.style.display ='none';
    headerbar.style.right = '-100%';
})