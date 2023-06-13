let menu = document.querySelector('#menu-icon')
let dropdown = document.querySelector('.dropdown-menu')


menu.onclick = () => {
    menu.classList.toggle('x')
    dropdown.classList.toggle('open')
}
