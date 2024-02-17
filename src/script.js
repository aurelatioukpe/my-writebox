    document.getElementById('saveButton').addEventListener('click', function() {
    var textToSave = document.getElementById('textArea').value;
    var blob = new Blob([textToSave], {type: 'text/plain'});
    var a = document.createElement('a');
    a.download = 'text_saved.txt';
    a.href = window.URL.createObjectURL(blob);
    a.click();
});

document.getElementById('backgroundColor').addEventListener('change', function() {
    var color = this.value;
    document.body.style.backgroundColor = color;
});
