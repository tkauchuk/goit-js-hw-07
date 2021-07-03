const refs = {
    input: document.querySelector('input'),
    renderBtn: document.querySelector('[data-action=render]'),
    destroyBtn: document.querySelector('[data-action=destroy]'),
    boxesCollectionWrapper: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getAmount() {
    let amount = Number(refs.input.value);

    return amount;
};

function createBoxes() {
    refs.boxesCollectionWrapper.insertAdjacentHTML('beforeend', '<div></div>'.repeat(getAmount()));

    const boxes = refs.boxesCollectionWrapper.querySelectorAll('div');
    const boxDefaultSize = 30;

    boxes.forEach((box, index) => {
        const size = boxDefaultSize + index * 10;
        box.style.cssText = `margin-top: 5px; width: ${size}px; height: ${size}px; 
        background-color: ${randomColor()}; border-radius: 5px;`;
    });
};

function destroyBoxes() {
    refs.boxesCollectionWrapper.innerHTML = '';
    refs.input.value = 0;
};

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
};




