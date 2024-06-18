const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-button');

searchInput.addEventListener('input', () => {
  clearButton.style.display = searchInput.value ? 'block' : 'none';
});

function clearSearch() {
  searchInput.value = '';
  clearButton.style.display = 'none';
  searchInput.focus();
  if (searchInput.value) {
    clearButton.style.display = 'block';
  }
}