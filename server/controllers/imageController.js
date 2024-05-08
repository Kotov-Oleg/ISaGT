const minioClient = require('../db/minioConnect')
const path = require('path')
// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const uuid = require("uuid");
const {json} = require("express");
const formatter = new Formatter();

class ImageController {

  // Запрос на сохранение файла
  async saveImage(req, res) {
    console.log('request: post image')
    // console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {file} = req.files
      console.log('file', file)
      let fileName = uuid.v4() + '.jpg'
      await minioClient.putObject('images', fileName, file.data)
      res.status(200).json({fileName})
    } catch (err) {
      const message = 'Не удалось сохранить файл!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  async removeIMages(req, res) {

  }
}

module.exports = new ImageController()