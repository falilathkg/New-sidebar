const button = document.getElementById('togglebtn')
const menu = document.querySelector('.menu')
const close = document.getElementById('close')

togglebtn.addEventListener('click', (e) => {
menu.classList.toggle('open')
menu.style.transition= "1.5s"

})
close.addEventListener('click', (e) => {
    menu.classList.remove('open')
})