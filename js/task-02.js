const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createElements = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemRef = document.createElement(`li`);
    itemRef.textContent = ingredient;
    itemRef.classList.add(`item`);

    return itemRef;
  });
};

const elements = createElements(ingredients);

const ingredientsContainerRef = document.querySelector(`#ingredients`);

ingredientsContainerRef.append(...elements);
