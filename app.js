// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, 'public')));

// Новый маршрут, который возвращает HTML‑страницу с модальным окном для видео
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Page1</title>
    <style>
      body {
        background: #262626;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      button {
        padding: 20px 50px;
        outline: none;
        border: none;
        border-radius: 25px;
        background-color: rgb(0, 117, 229);
        cursor: pointer;
        color: #fff;
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 2px;
        box-shadow: 0px 5px 10px #000;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      /* Стили для модального окна */
      .modal {
        display: none; /* Скрыто по умолчанию */
        position: fixed;
        z-index: 1; /* Поверх всего */
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.5); /* Полупрозрачный фон */
      }
      .modal-content {
        background-color: #fefefe;
        margin: 10% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 700px;
        position: relative;
      }
      .close {
        color: #aaa;
        position: absolute;
        top: 10px;
        right: 25px;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
      }
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <img src="/images/kururin-kuru-kuru.gif" alt="я джифка">
    <button id="openModalBtn" type="button">Click me</button>
    
    <!-- Разметка модального окна -->
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <video width="100%" controls>
          <source src="/images/ea7491d9c20191fee5bce27ad45bdcd9_t4.mp4" type="video/mp4">
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </div>
    
    <script>
      // Получаем элементы
      var modal = document.getElementById('myModal');
      var btn = document.getElementById('openModalBtn');
      var span = document.getElementsByClassName('close')[0];

      // При нажатии на кнопку открываем модальное окно
      btn.onclick = function() {
        modal.style.display = 'block';
      };

      // При клике на элемент <span> закрываем окно
      span.onclick = function() {
        modal.style.display = 'none';
      };

      // При клике вне модального окна тоже закрываем его
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      };
    </script>
  </body>
</html>`);
});

// Маршрут для отправки файла GIF (если необходимо)
app.get('/kururin-kuru-kuru.gif', (req, res) => {
  res.sendFile(path.join(__dirname, 'kururin-kuru-kuru.gif'), (err) => {
    if (err) {
      console.error('Ошибка при отправке файла:', err);
      res.status(err.status || 500).end();
    }
  });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
