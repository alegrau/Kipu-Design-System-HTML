 document.addEventListener('DOMContentLoaded', function() {
    const chip = document.getElementById('chip');
    const closeButton = chip.querySelector('.close-btn');

    chip.addEventListener('click', function() {
      chip.classList.add('selected');
    });

    closeButton.addEventListener('click', function(event) {
      event.stopPropagation(); // Evita que el clic en el botón cierre active el chip
      chip.classList.remove('selected');
    });
  });