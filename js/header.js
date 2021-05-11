window.addEventListener('scroll', function () {
  let header = document.querySelector('header')
  let btn = document.querySelector('.toTop')
  let windowscrol = window.scrollY > 500; /*quando o window tiver rolado mais de 500 pixel no eixo y */
  header.classList.toggle('scrolling-active', windowscrol)
  btn.classList.toggle('btn-active', windowscrol)
})