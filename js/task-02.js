const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulEl = document.querySelector('#ingredients');

const createElementFunction = element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  liEl.classList.add('item');

  return liEl;
};

const listEl = ingredients.map(createElementFunction);
ulEl.append(...listEl);
