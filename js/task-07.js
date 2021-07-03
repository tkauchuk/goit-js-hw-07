const refs = {
    fontSizeController: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.fontSizeController.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
    text.style.fontSize = `${event.currentTarget.value * 0.32}px`;

    // Добавил условие, чтобы сохранить читабельность текста  

    if (event.currentTarget.value < 20) {
        text.style.fontSize = '5px';
    }
}