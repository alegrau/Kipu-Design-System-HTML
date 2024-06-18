document.querySelectorAll('.close-button').forEach(button => {
  button.addEventListener('click', function () {
    this.parentElement.classList.add('hidden');
  });
});