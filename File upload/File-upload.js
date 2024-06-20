const uploadBox = document.getElementById('upload-box');
const uploadContainer = document.getElementById('upload-container');
const fileListContainer = document.createElement('div');
fileListContainer.id = 'file-list-container';
uploadContainer.appendChild(fileListContainer);

uploadContainer.addEventListener('dragover', function (e) {
  e.preventDefault();
  uploadBox.classList.add('dragover');
});

uploadContainer.addEventListener('dragleave', function (e) {
  e.preventDefault();
  uploadBox.classList.remove('dragover');
});

uploadContainer.addEventListener('drop', function (e) {
  e.preventDefault();
  uploadBox.classList.remove('dragover');
  const files = e.dataTransfer.files;
  handleFiles(files);
});

function handleFiles(files) {
  const fileList = files;
  const fileListContainer = document.getElementById('file-list-container');

  Array.from(fileList).forEach(file => {
    const item = document.createElement('div');
    item.classList.add('uploading');

    const status = document.createElement('div');
    status.classList.add('status');

    const icon = document.createElement('i');
    icon.classList.add('material-icons', 'icon', 'file');
    icon.textContent = 'description';

    const progressStatus = document.createElement('div');
    progressStatus.classList.add('progress-status');

    const fileDetail = document.createElement('div');
    fileDetail.classList.add('file');

    const fileName = document.createElement('span');
    fileName.classList.add('file-name');
    fileName.textContent = file.name;

    const fileSize = document.createElement('span');
    fileSize.classList.add('file-size');
    fileSize.textContent = `${(file.size / 1024 / 1024).toFixed(2)}MB`;

    fileDetail.appendChild(fileName);
    fileDetail.appendChild(fileSize);

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');

    const progress = document.createElement('div');
    progress.classList.add('progress');
    progress.style.width = '0%';

    const progressLabel = document.createElement('div');
    progressLabel.classList.add('progress-label');
    progressLabel.textContent = '0%';

    progressBar.appendChild(progress);
    progressBar.appendChild(progressLabel);

    progressStatus.appendChild(fileDetail);
    progressStatus.appendChild(progressBar);

    status.appendChild(icon);
    status.appendChild(progressStatus);

    const closeButton = document.createElement('button');
    closeButton.classList.add('btn-close');
    closeButton.innerHTML = '<i class="material-icons icon close">close</i>';
    closeButton.addEventListener('click', function () {
      item.remove();
    });

    item.appendChild(status);
    item.appendChild(closeButton);

    fileListContainer.appendChild(item);

    // Simulating progress
    let progressValue = 0;
    const updateProgress = () => {
      progressValue += 1;
      progress.style.width = `${progressValue}%`;
      progressLabel.textContent = `${progressValue}%`;
      if (progressValue < 100) {
        setTimeout(updateProgress, 50);
      } else {
        // Replace uploading item 
        item.classList.replace('uploading', 'uploaded');
        progressBar.style.display = 'none'; 
        closeButton.style.display = 'block'; 
      }
    };
    setTimeout(updateProgress, 50);
  });
}