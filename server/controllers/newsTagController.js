const db = require('../db');

// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const formatter = new Formatter();

class NewsTagController {

  // Запрос списка новостных тегов
  async getTags(req, res) {
    console.log('request: news tags')
    try {
      const query = `
        SELECT json_build_object(
          'value', id,
          'label', name,
          'color', color
        ) AS tag FROM news_tag
      `
      const tags = (await db.query(query)).rows

      res.status(200).json(tags)
    } catch (err) {
      const message = '[news_tag:24] Не удалось получить список новостных тегов!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

}

module.exports = new NewsTagController()