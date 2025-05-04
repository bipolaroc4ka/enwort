// Замените URL на ваш URL из Google Apps Script Web App
const scriptURL = 'https://script.google.com/macros/s/AKfycbysfmelCyvHgZj3CVXKdhgM2Z8-529wi-rvcWUriLAjt1uuhI5apqi2Q_Dn4t1kYvH4pg/exec';

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

function getData() {
  fetch(scriptURL)
    .then(res => res.json())
    .then(data => {
      console.log(data); // Посмотрим что вернёт
      statusDiv.innerHTML = '';
      data.forEach(row => {
        statusDiv.innerHTML += `<p>${row.join(' | ')}</p>`;
      });
    })
    .catch(err => {
      statusDiv.innerHTML = 'Ошибка получения данных';
    });
}

// Вызовем чтение сразу при открытии сайта
getData();

