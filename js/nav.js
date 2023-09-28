const navBtn = document.getElementById('menu-btn')
const navUl = document.querySelector('.nav-ul')
const overlay = document.querySelector('.overlay')

navBtn.addEventListener('click', function(){
    navUl.classList.toggle('clicked')
    overlay.classList.toggle('overlay-clicked')
})