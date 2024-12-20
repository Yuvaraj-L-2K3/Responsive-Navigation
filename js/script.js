document.addEventListener('DOMContentLoaded',()=>{
    const sidenav=document.querySelector('.side-nav');
    const btnnav=document.querySelector('#btn-nav');
    const overlay=document.querySelector('.nav-overlay');


    btnnav.addEventListener('click',()=>{sidenav.classList.add('open')});

    overlay.addEventListener('click',()=>{sidenav.classList.remove('open')});


});