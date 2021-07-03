const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', onValidInput);

function onValidInput(event) {
    
    inputRef.classList.add('invalid');

    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        inputRef.classList.replace('invalid', 'valid');
    };
};