const formEl = document.querySelector('.login-form');
const formObj = {};

const submitFormFn = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert('Заполните все поля!');
    return;
  }

  formObj[email.name] = email.value;
  formObj[password.name] = password.value;
  console.log(formObj);

  event.currentTarget.reset();
};

formEl.addEventListener('submit', submitFormFn);

//   for (const el of event.srcElement) {
//     if (el.nodeName === 'INPUT' && !el.value) {
//       alert('Заполните все поля!');
//       return;
//     }
//   }
