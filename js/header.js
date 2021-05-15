window.addEventListener('scroll', function () {
  let header = document.querySelector('header')
  let btn = document.querySelector('.toTop')
  let windowscrol = window.scrollY > 400; /*quando o window tiver rolado mais de 500 pixel no eixo y */
  header.classList.toggle('scrolling-active', windowscrol)
  btn.classList.toggle('btn-active', windowscrol)
})

window.addEventListener('scroll', function () {

  let animation2 = document.querySelector('#anim1')
  let animation1 = document.querySelector('#bt')

  let windowscrol = window.scrollY < 500; /*quando o window tiver rolado mais de 500 pixel no eixo y */
  animation2.classList.toggle('anim', windowscrol)
  animation1.classList.toggle('anim2', windowscrol)



})

