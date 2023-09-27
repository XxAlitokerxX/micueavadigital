// Obtén una referencia al botón y al menú desplegable
var dropdownButton = document.querySelector('.dropdown .dropbtn');
var dropdownMenu = document.querySelector('.dropdown .dropdown-content');

// En lugar de usar "hover" (pasar el cursor), usa "click" (hacer clic)
document.querySelector('.dropdown').addEventListener('click', function() {
    // Aquí puedes agregar el código para mostrar o ocultar el menú desplegable
    var ul = this.querySelector('ul');
    ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
});


// También puedes cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown .dropbtn')) {
    // Si se hace clic fuera del botón, cierra el menú
    dropdownMenu.classList.remove('active');
  }
});

