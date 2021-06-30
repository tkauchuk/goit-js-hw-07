const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const ingredientsListItems = ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;

    return listItem;
});

ingredientsListRef.append(...ingredientsListItems);