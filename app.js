// app.js
const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));
// Новый маршрут, который возвращает HTML‑страницу
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width,initial-scale=1.0">
                <title>Page1</title>
                <style>
                    body{
                        background:#262626;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    button{
                        padding: 20px 50px ;
                        outline: none;
                        border: none;
                        border-radius: 25px;
                        background-color: rgb(0, 117, 229);
                        cursor: pointer;
                        color: #fff;
                        font-weight:600;
                        font-size: 20px;
                        letter-spacing: 2px;
                        box-shadow: 0px 5px 10px #000;
                    }
                    img{
                        max-width: 100%;
                        height: auto;
                    }
            </style>            
            </head>
            <body>
            
            
                <img src="kururin-kuru-kuru.gif" alt="я джифка">
            
                <button type="button">Click me</button>
            
            </body>
        </html>`);
});
app.get('/kururin-kuru-kuru.gif', (req, res) => {
  res.sendFile(path.join(__dirname, 'kururin-kuru-kuru.gif'));
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
