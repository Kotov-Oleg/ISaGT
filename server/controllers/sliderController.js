const db = require('../db/db');
const minioClient = require('../db/minioConnect')

// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const formatter = new Formatter();

class SliderController {
  // Запрос списка новостей
  async getSliders(req, res) {
    console.log('request: sliders')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id: facultyId} = req.params

      let query = `SELECT id, title, body, img, link, number FROM slider WHERE id_faculty = ${facultyId};`
      const sliders = (await db.query(query)).rows

      res.status(200).json(sliders)
    } catch (error) {
      const message = 'Не удалось получить список слайдов!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  };

  // Запрос на обновление порядка слайдов
  async reorderSlider(req, res) {
    console.log('request: reorder sliders')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      let {data} = req.body
      data = JSON.parse(data)

      const query = `
        UPDATE slider SET number = d.number
        FROM json_populate_recordset(null::json_reorder, '${JSON.stringify(data)}') AS d
        WHERE slider.id = d.id;
      `
      await db.query(query)

      res.status(200).json({message: 'Слайды успешно упорядочены!'})
    } catch (err) {
      const message = 'Не удалось упорядочить слайды!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }


}

module.exports = new SliderController();