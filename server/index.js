// Импорт переменных среды из '.env' в 'process.env'
require('dotenv').config()

const path = require('path')
const express = require("express")
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const minioClient = require('./db/minioConnect.js')


// Определение порта
const port = process.env.PORT

// Создание express приложения
const app = express()
// Подключение парсера JSON
app.use(express.json())

// Подключение CORS
app.use(cors())

app.use(fileUpload({}))

// Расположены в правильном порядке
// Подключение роутера запросов
app.use('/api', router)
// Middleware для раздачи статики из MinIO
app.use('/', (req, res, next) => {
  // удаляем первый слеш из пути
  const objectName = req.path.slice(1);
  // Получаем объект из MinIO
  minioClient.getObject('images', objectName, (err, dataStream) => {
    if (err) {
      console.log(err)
      res.status(404).send('Файл не найден');
      return;
    }
    // Отправляем содержимое объекта в ответ на запрос
    dataStream.pipe(res);
  });
});

// Запуск сервера
app.listen(port, () => console.log(`Server started on port ${port}`))