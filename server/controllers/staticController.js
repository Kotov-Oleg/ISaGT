const db = require('../db');
const path = require('path')
// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const formatter = new Formatter();

class StaticController {

  // Запрос на получение файла
  async getStatic(req, res) {
    console.log('request: static')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {name} = req.query
      const options = {
        root:  path.resolve(__dirname, '..', 'data')
      }
      res.sendFile(name, options)
    } catch (err) {
      const message = 'Не удалось отправить файл!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }
}

module.exports = new StaticController()