function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#input');
const divBoxesEl = document.querySelector('#boxes');
const destroyBoxesEl = document.querySelector('[data-destroy]');
const createBoxesEl = document.querySelector('[data-create]');
let varForSize = 30;

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    divBoxesEl.insertAdjacentHTML(
      'beforeend',
      `<div style="background-color:${getRandomHexColor()};width: ${varForSize}px;height: ${varForSize}px;display:block"></div>`
    );
    varForSize += 10;
  }
};
const destroyBoxes = () => {
  divBoxesEl.innerHTML = '';
  varForSize = 30;
};

const onInputClick = () => {
  createBoxes(inputEl.value);
};

destroyBoxesEl.addEventListener('click', destroyBoxes);
createBoxesEl.addEventListener('click', onInputClick);
