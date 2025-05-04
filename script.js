// Замените URL на ваш URL из Google Apps Script Web App
const scriptURL = 'https://script.google.com/macros/s/AKfycbysfmelCyvHgZj3CVXKdhgM2Z8-529wi-rvcWUriLAjt1uuhI5apqi2Q_Dn4t1kYvH4pg/exec';


const statusDiv = document.getElementById('status');

function sendScore(name, score) {
  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify({ name, score }),
    headers: { 'Content-Type': 'application/json' }
  }).then(() => getScores());
}

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


