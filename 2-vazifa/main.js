var fileInput = document.getElementById('fileInput');
var fileSizeDisplay = document.getElementById('fileSize');

fileInput.addEventListener('change', function() {
    var file = this.files[0]; 

    if (file) {
        var fileSize = file.size; 
        var fileSizeKB = fileSize / 1024;

        fileSizeDisplay.textContent = 'Fayl hajmi: ' + fileSizeKB.toFixed(2) + ' KB'; 
    } else {
        fileSizeDisplay.textContent = 'Fayl tanlanmagan';
    }
});