const itemsRef = document.querySelectorAll('.item');
const categoriesRef = document.querySelectorAll('h2');

console.log(`Number of categories: ${itemsRef.length}`);
categoriesRef.forEach(category => {
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${category.nextElementSibling.children.length}`);
})
