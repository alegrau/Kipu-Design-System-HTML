document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const isOpen = header.classList.toggle('open');
      const content = header.nextElementSibling;
      
      header.querySelector('.chevron').textContent = isOpen ? 'expand_less' : 'expand_more';
      
      content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : null;
    });
  });