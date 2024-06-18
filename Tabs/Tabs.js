function showTabContent(index) {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('selected');
      tab.classList.remove('default');
      panels[i].classList.add('active');
    } else {
      tab.classList.remove('selected');
      tab.classList.add('default');
      panels[i].classList.remove('active');
    }
  });
}
