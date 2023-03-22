

(function () {
    var menu = document.getElementById('menu'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0){
			menu.classList.add('menuFixo'); // > 0 ou outro valor desejado
		} 
		
        else{
			menu.classList.remove('menuFixo');
		} 
    });
})();