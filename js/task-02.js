const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');


const ingredientsEl = ingredients.map(ingredient => {
  let itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList = 'item';
  return itemEl;
})
ingredientsRef.append(...ingredientsEl)