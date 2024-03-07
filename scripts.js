const nav = document.querySelector('#nav')
const icon = document.querySelector('#icon')





function openNav(){
 nav.classList.toggle('fam')
}

icon.addEventListener('click',openNav)