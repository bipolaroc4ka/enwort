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

window.addEventListener('DOMContentLoaded', init)

function init() {
  Tabletop.init({
    key: '10WxGqkd7Jt2c0h83a54MHXmWYogR7M5Zncr2EIy8JdI', // <-- вставь сюда свой ID таблицы
    callback: showData,
    simpleSheet: true
  })
}

function showData(data) {
  data.forEach(item => {
    console.log(item.name + ": " + item.message);
  })
}
