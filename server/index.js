require('dotenv').config() // Импорт переменных среды из '.env' в 'process.env'

// Определение порта
const port = process.env.PORT

// Создание express приложения
const express = require("express")
const app = express()
app.use(express.json()) // Подключение парсера JSON

// Подключение CORS
const cors = require('cors')
app.use(cors())

const fileUpload = require('express-fileupload')
app.use(fileUpload({}))

// Подключение роутера запросов
const router = require('./routes/index')
app.use('/api', router)

// Запуск сервера
app.listen(port, () => console.log(`Server started on port ${port}`))