const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const changeOutput = event => {
  if (event.currentTarget.value === '') {
    spanEl.textContent = 'Anonymous';
    return;
  }
  spanEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener('input', changeOutput);
