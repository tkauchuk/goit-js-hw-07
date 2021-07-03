const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action = increment]');
const decrementBtn = document.querySelector('[data-action = decrement]');
let counter = 0;

incrementBtn.addEventListener('click', onIncrementBtnClick);

decrementBtn.addEventListener('click', onDecrementBtnClick);


function onIncrementBtnClick() {
    counter += 1;
    counterValue.innerHTML = counter;
};

function onDecrementBtnClick() {
    counter -= 1;
    counterValue.innerHTML = counter;
};