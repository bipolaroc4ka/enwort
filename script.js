// Замените URL на ваш URL из Google Apps Script Web App
const scriptURL = 'https://script.google.com/macros/s/AKfycbz9JXMxygYFUVi_UUdK75GN8dYbpBzfsl_z8fGpSrCw2ItD6PUr4ZXqj3VW1D0Ib3koJQ/exec';


const statusDiv = document.getElementById('status');

function sendScore(name, score) {
  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify({ name, score }),
    headers: { 'Content-Type': 'application/json' }
  }).then(() => getScores());
}
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
function getScores() {
  fetch(scriptURL)
    .then(res => res.json())
    .then(data => {
      statusDiv.innerHTML = '<h3>Таблица рекордов:</h3>';
      data.forEach(([name, score]) => {
        statusDiv.innerHTML += `<p>${name}: ${score}</p>`;
      });
    });
}

// Например, вызываем отправку
// sendScore('bipolaroc4ka', 300);
getScores();


