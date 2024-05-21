const minioClient = require('../db/minioConnect')
const uuid = require("uuid");
const {json} = require("express");

// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const formatter = new Formatter();

class ImageController {

  // Запрос на сохранение файла
  async saveImage(req, res) {
    console.log('request: post image')
    try {
      const {file} = req.files
      let fileName = uuid.v4() + '.jpg'
      await minioClient.putObject('images', fileName, file.data)
      await minioClient.setObjectTagging('images', fileName, {'time': 'time'})
      res.status(200).json({fileName})
    } catch (err) {
      const message = 'Не удалось сохранить файл!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  async deleteImages(req, res) {
    console.log('request: delete work')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      let {deleteFiles} = req.body
      deleteFiles = JSON.parse(deleteFiles)
      await minioClient.removeObjects('images', deleteFiles)
      res.status(200).json({message: 'Изображения успешно удалены!'})
    } catch (err) {
      const message = 'Не удалось удалить изображения!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }
}

module.exports = new ImageController()