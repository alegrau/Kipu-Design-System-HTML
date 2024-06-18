function updateProgress(percentage) {
  var progress = document.getElementById('progress');
  var progressLabel = document.getElementById('progressLabel');

  progress.style.width = percentage + '%';
  progressLabel.innerHTML = percentage + '%';
}


updateProgress(50); 