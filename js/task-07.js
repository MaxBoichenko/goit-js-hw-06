const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const onInputElInput = event => {
  spanEl.style.fontSize = event.target.value + 'px';
};
inputEl.addEventListener('input', onInputElInput);
