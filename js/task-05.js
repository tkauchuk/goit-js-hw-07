const refs = {
    inputText: document.querySelector('#name-input'),
    outputText: document.querySelector('#name-output'),
};

refs.inputText.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    // Добавил проверку на пробельные символы в начале и в конце строки str.trim()

    if (event.currentTarget.value.trim().length === 0) {
        return refs.outputText.textContent = 'незнакомец';
    }
    return refs.outputText.textContent = event.currentTarget.value;
};