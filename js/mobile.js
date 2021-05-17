

let btnMobile = document.getElementById('btn-mobile')
let nav = document.getElementById('nav')
function toggleMenu() {



  if (window.scrollY > 400) {
    nav.classList.toggle('active')
  } else {
    nav.classList.toggle('active2')
  }



}

btnMobile.addEventListener('click', toggleMenu)

function list() {
  nav.classList.remove('active')
  nav.classList.remove('active2')
}


