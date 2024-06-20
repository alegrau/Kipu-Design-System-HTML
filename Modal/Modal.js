const openModalBtn = document.querySelector('.open-modal-btn');
const modal = document.getElementById('myModal');
const closeModalBtns = document.querySelectorAll('.close');
const closeModalBtnX = document.querySelector('.modal .close-modal-btn:last-child');

// Abrir el modal
function openModal() {
  modal.style.display = 'block';
}

// Cerrar el modal
function closeModal() {
  modal.style.display = 'none';
}

// Boton abrir
openModalBtn.addEventListener('click', openModal);

// Botton cerrar
closeModalBtns.forEach(btn => {
  btn.addEventListener('click', closeModal);
});

closeModalBtnX.addEventListener('click', closeModal);

// Click cerrar
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

modal.addEventListener('click', function (event) {
  event.stopPropagation();
});
