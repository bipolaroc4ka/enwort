document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const params = new URLSearchParams(data);

  fetch('https://script.google.com/macros/s/AKfycbxxxxxxx/exec?' + params.toString(), {
    method: 'POST'
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById('status').innerText = 'Успешно отправлено!';
    form.reset();
  })
  .catch(error => {
    document.getElementById('status').innerText = 'Ошибка!';
  });
});
