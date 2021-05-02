let bar = document.querySelector('.bars'),
    menu = document.querySelector('.menu');

//overlay menu

bar.addEventListener('click', function(){
    menu.style.display = 'block';
});


menu.addEventListener('click', function(){
    menu.style.display = 'none';
})
