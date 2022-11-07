const inputEl = document.querySelector('#validation-input');

const onInputBlur = event => {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
};

inputEl.addEventListener('blur', onInputBlur);
