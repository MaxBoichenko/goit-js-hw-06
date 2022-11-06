const onClickDecrementBtn = document.querySelector('[data-action="decrement"]');
const onClickIncrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counter = {
  counterValue: 0,
  decrement() {
    this.counterValue -= 1;
  },
  increment() {
    this.counterValue += 1;
  },
};

const decrementOnClickFn = function (event) {
  counter.decrement();
  valueEl.textContent = counter.counterValue;
};
const incrementOnClickFn = function (event) {
  counter.increment();
  valueEl.textContent = counter.counterValue;
};

onClickDecrementBtn.addEventListener('click', decrementOnClickFn);
onClickIncrementBtn.addEventListener('click', incrementOnClickFn);
