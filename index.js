let bar = document.querySelector('.bars'),
    closeMenu = document.querySelector('.close'),
    menu = document.querySelector('.menu')

//overlay menu

/*bar.addEventListener('click', function(){
    menu.style.display = 'block';
    bar.classList.toggle('passive')
});


closeMenu.addEventListener('click', function(){
    menu.style.display = 'none';
    bar.classList.toggle('passive')
})*/

function openClose(){
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

bar.addEventListener('click', openClose)
closeMenu.addEventListener('click', openClose)

