// JavaScript to toggle dropdown
const select = document.querySelector('.select');
const list = document.querySelector('.list');

select.addEventListener('click', function () {
  list.style.display = (list.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', function (event) {
  if (!event.target.matches('.select') && !event.target.matches('.list li')) {
    list.style.display = 'none';
  }
});

list.addEventListener('click', function (event) {
  if (event.target.matches('li')) {
    select.querySelector('span').textContent = event.target.textContent;
    list.style.display = 'none';
  }
});
