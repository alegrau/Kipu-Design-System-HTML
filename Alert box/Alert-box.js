document.querySelectorAll('.btn-close').forEach(button => {
  button.addEventListener('click', function () {
    this.closest('.alert-box').remove();
  });
});