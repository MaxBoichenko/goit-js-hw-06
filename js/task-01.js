const liEl = document.querySelectorAll('.item');
console.log(liEl);

const numOfCategories = liEl.length;
console.log(`Number of categories: ${numOfCategories}`);

liEl.forEach(element => {
  console.log('Category', element.querySelector('h2').textContent);
  console.log('Elements', element.querySelector('ul').children.length);
});
