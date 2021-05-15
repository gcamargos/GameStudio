

let btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {


  let nav = document.getElementById('nav')
  if (window.scrollY > 400) {
    nav.classList.toggle('active')
  } else {
    nav.classList.toggle('active2')
  }



}

btnMobile.addEventListener('click', toggleMenu)