// Замените URL на ваш URL из Google Apps Script Web App
const scriptURL = 'https://script.google.com/macros/s/AKfycbxzs65YgWdi5roZ8yd89dYmPdqQEyJvj4XotqDJDBg2vaCoXdcX73bTJQJMompyr42bIw/exec';

const form = document.getElementById('myForm');
const statusDiv = document.getElementById('status');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      statusDiv.innerHTML = 'Сообщение отправлено!';
      form.reset();
    })
    .catch(error => {
      statusDiv.innerHTML = 'Ошибка отправки. Попробуйте ещё раз.';
    });
});
