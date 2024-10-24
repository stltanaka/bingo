const textInput = document.getElementById('textInput');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const message = document.getElementById('message');

saveButton.addEventListener('click', () => {
    const text = textInput.value;
    localStorage.setItem('savedText', text);
    message.textContent = 'Text saved!';
});

loadButton.addEventListener('click', () => {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        textInput.value = savedText;
        message.textContent = 'Text loaded!';
    } else {
        message.textContent = 'No saved text found.';
    }
});
