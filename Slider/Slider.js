const rangeSlider = document.getElementById('rangeSlider');
const minValue = 0;
const maxValue = 100;

// Update slider values when slider is moved
rangeSlider.addEventListener('input', () => {
  const value = rangeSlider.value;
  const range = maxValue - minValue;
  const percent = (value - minValue) / range * 100;
  rangeSlider.style.backgroundSize = percent + '% 100%';
});
