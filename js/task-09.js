function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const body = document.querySelector('body');

const onBtnClick = event => {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.innerHTML = body.style.backgroundColor;
};

btnEl.addEventListener('click', onBtnClick);
