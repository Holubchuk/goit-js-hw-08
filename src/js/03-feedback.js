import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
const { email, message } = form.elements;

form.addEventListener('input', throttle(safeToStorage, 500));
form.addEventListener('submit', handleSubmit);

function safeToStorage() {
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

if (localStorage.getItem('feedback-form-state')) {
  email.value = savedData.email || "";
  message.value = savedData.message || "";
};

function handleSubmit(event) {
  event.preventDefault();
  localStorage.clear();
  console.log(savedData);
  form.reset();
};
