let closeMenu = document.querySelector('.close'),
    list = document.querySelectorAll('li'),
    logo = document.querySelector('.logo'),
    header = document.querySelector('.header-main')

closeMenu.addEventListener('click', function (){
  list.forEach(el=>el.classList.toggle('active'))
  header.classList.toggle('menu-part')
});

