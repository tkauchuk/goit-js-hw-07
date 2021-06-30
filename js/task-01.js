// Количество категорий в списке

const categoriesListRef = document.querySelector('#categories');
const categoriesQuantity = categoriesListRef.children.length;

console.log(`В списке ${categoriesQuantity} категории.`);

// Текст заголовка + количество элементов в категории

const categoriesListItems = document.querySelectorAll('.item');

categoriesListItems.forEach(category => {
    const categoryTitle = category.firstElementChild.textContent;
    const categoryElsQuantity = category.lastElementChild.children.length;

    console.log(`Категория: ${categoryTitle}.`);
    console.log(`Количество элементов: ${categoryElsQuantity}.`);
});