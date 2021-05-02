let bar = document.querySelector('.bars'),
    closeMenu = document.querySelector('.close'),
    menu = document.querySelector('.menu')

//overlay menu

function openClose(){
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

bar.addEventListener('click', openClose)
closeMenu.addEventListener('click', openClose)
