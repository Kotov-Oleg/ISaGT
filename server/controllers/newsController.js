const db = require('../db');

// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const formatter = new Formatter();

class NewsController {

  // Запрос количества страниц новостей
  async getNewsPageCount(req, res) {
    console.log('request: news page count')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {q, rowsPerPage} = req.query
      const qLower = q.toLowerCase()

      let query =  `
        SELECT CEIL(count(*)/${rowsPerPage}::double precision) AS count
        FROM news WHERE lower(title) LIKE '%${qLower}%'
      `
      const {count} = (await db.query(query)).rows[0]

      res.status(200).json(count)
    } catch (error) {
      const message = '[news:25] Не удалось получить количество страниц!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  };

  // Запрос списка новостей
  async getNews(req, res) {
    console.log('request: news')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {q, rowsPerPage, page} = req.query
      const qLower = q.toLowerCase()

      let query =  `
        SELECT id, title, date, preview
        FROM news WHERE lower(title) LIKE '%${qLower}%'
        LIMIT ${rowsPerPage} OFFSET ${rowsPerPage*(page-1)};
      `
      const news = await db.query(query)

      res.status(200).json(news.rows)
    } catch (error) {
      const message = '[news:48] Не удалось получить список новостей!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  };

  // Запрос одной новости
  async getOneNews(req, res) {
    console.log('request: one news')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const newsId = Number(req.params.id)

      let query =  `
        SELECT id, title, date, preview, body, photos
        FROM news WHERE id = ${newsId}
      `
      const news = await db.query(query)

      res.status(200).json(news.rows)
    } catch (error) {
      const message = '[news:69] Не удалось получить новость!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  };

  // Создание новости
  async createNews(req, res) {
    console.log('request: create news')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {title, date, preview, body, photos} = req.body
      let query = `
        INSERT INTO news (title, date, preview, body, photos)
        VALUES (
          '${title}',
          '${date}',
          '${preview}',
          '${body}',
          '${photos}'
        )
      `
      await db.query(query)
      res.status(200).send('Новость успешно добавлена')
    } catch (error) {
      const message = '[news:94] Не удалось создать новость!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }
}

module.exports = new NewsController()