require('dotenv').config()
const express = require('express')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandling')
const fileUpload = require('express-fileupload')
const path = require('path')

const PORT = process.env.PORT ?? 5000 // определение порта

const app = express()            // создание express приложения
app.use(cors())                  // доступ клиента с другого хоста 
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: "Heyyyyy"})
})

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()