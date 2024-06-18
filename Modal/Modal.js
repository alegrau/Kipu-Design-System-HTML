// Obtener elementos del DOM
const openModalBtn = document.querySelector('.open-modal-btn');
const modal = document.getElementById('myModal');
const closeModalBtns = document.querySelectorAll('.close');
const closeModalBtnX = document.querySelector('.modal .close-modal-btn:last-child');

// Función para abrir el modal
function openModal() {
  modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = 'none';
}

// Evento para abrir el modal al hacer clic en el botón
openModalBtn.addEventListener('click', openModal);

// Evento para cerrar el modal al hacer clic en los botones de cerrar
closeModalBtns.forEach(btn => {
  btn.addEventListener('click', closeModal);
});

// Evento para cerrar el modal al hacer clic en el botón X
closeModalBtnX.addEventListener('click', closeModal);

// Evento para cerrar el modal al hacer clic fuera del contenido del modal (en el fondo semi-transparente)
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Evitar que el click en el contenido del modal cierre el modal
modal.addEventListener('click', function (event) {
  event.stopPropagation();
});
