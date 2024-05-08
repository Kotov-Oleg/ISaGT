const db = require('../db/db');
const uuid = require('uuid')
const path = require("node:path");

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
      const message = 'Не удалось получить список новостей!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  };

  // Запрос списка новостей для админки
  async getNewsAdmin(req, res) {
    console.log('request: news admin')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {q, rowsPerPage, page} = req.query
      const qLower = q.toLowerCase()

      let query =  `
        SELECT id, title, date
        FROM news WHERE lower(title) LIKE '%${qLower}%'
        LIMIT ${rowsPerPage} OFFSET ${rowsPerPage*(page-1)};
      `
      const news = await db.query(query)

      res.status(200).json(news.rows)
    } catch (error) {
      const message = 'Не удалось получить список новостей!'
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
        SELECT *
        FROM news WHERE id = ${newsId}
      `
      const news = await db.query(query)

      res.status(200).json(news.rows[0])
    } catch (error) {
      const message = '[news:69] Не удалось получить новость!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  };

  async createNews(req, res) {
    console.log('request: create news')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      // Достаем данные из запроса
      let {title, date, document} = req.body
      const {preview} = req.files
      console.log('img', preview)
      let fileName = uuid.v4() + '.jpg'
      document = JSON.parse(document)
      // await img.forEach((i, index) => {
      //   // Создаем имя файла
      //   let fileName = uuid.v4() + '.jpg'
      //   // Сохраняем файл в папке
      //   i.mv(path.resolve(__dirname, '..', 'data', fileName))
      // })
      // Запрос

      let query = `
        INSERT INTO news (title, date, preview, document)
        VALUES (
          '${title}',
          '${date}',
          '${fileName}',
          '${JSON.stringify(document)}'
        )
      `
      console.log('query', query)
      await db.query(query)

      // Сохраняем файл в папке
      preview.mv(path.resolve(__dirname, '..', 'data', fileName))

      res.status(200).send('Новость успешно добавлена')
    } catch (error) {
      const message = '[news:94] Не удалось создать новость!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  }
}

module.exports = new NewsController()