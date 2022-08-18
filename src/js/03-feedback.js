import throttle from 'lodash.throttle';
const FORM_DATA_OBJECT = `feedback-form-state`;

const formEl = document.querySelector('form');
const formSubmitBtn = document.querySelector('button');

const savedFormDataObject = localStorage.getItem(FORM_DATA_OBJECT);
const parsedFormDataObject = JSON.parse(savedFormDataObject);

console.log(parsedFormDataObject);

if (parsedFormDataObject) {
  formEl.email.value = parsedFormDataObject.email;
  formEl.message.value = parsedFormDataObject.message;
}

formEl.addEventListener(
  'input',
  throttle(event => {
    event.preventDefault();
    const dataToSave = {
      email: formEl.email.value,
      message: formEl.message.value,
    };

    localStorage.setItem(FORM_DATA_OBJECT, JSON.stringify(dataToSave));

    showLogs();
  }, 500)
);

formSubmitBtn.addEventListener('click', event => {
  event.preventDefault();
  const dataToSave = {
    email: formEl.email.value,
    message: formEl.message.value,
  };
  dataToSave.email = '';
  dataToSave.message = '';
  localStorage.setItem(FORM_DATA_OBJECT, JSON.stringify(dataToSave));
  const savedFormDataObject = localStorage.getItem(FORM_DATA_OBJECT);
  const parsedFormDataObject = JSON.parse(savedFormDataObject);

  formEl.email.value = parsedFormDataObject.email;
  formEl.message.value = parsedFormDataObject.message;

  showLogs();
});

function showLogs() {
  console.log(`email= ${formEl.email.value}`);
  console.log(`message= ${formEl.message.value}`);
}
