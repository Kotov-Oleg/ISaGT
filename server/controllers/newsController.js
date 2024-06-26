const db = require('../db/db');
const minioClient = require('../db/minioConnect')

// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const formatter = new Formatter();

class NewsController {

  // Запрос количества страниц новостей
  async getNewsPageCount(req, res) {
    console.log('request: news page count')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {q, rowsPerPage, facultyId} = req.query
      const qLower = q.toLowerCase()

      let query =  `
        SELECT CEIL(count(*)/${rowsPerPage}::double precision) AS count
        FROM news WHERE lower(title) LIKE '%${qLower}%' AND id_faculty = ${facultyId};
      `
      const {count} = (await db.query(query)).rows[0]

      res.status(200).json(count)
    } catch (error) {
      const message = 'Не удалось получить количество страниц!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  };

  // Запрос списка новостей
  async getNews(req, res) {
    console.log('request: news')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {q, rowsPerPage, page, filter, facultyId} = req.query
      const qLower = q.toLowerCase()

      let query =  ` 
        SELECT id, title, date, preview
        FROM news WHERE lower(title) LIKE '%${qLower}%' AND id_faculty = ${facultyId}
        ${filter === 'today' ? 'AND date <= CURRENT_DATE' : ''}
        ORDER BY date DESC LIMIT ${rowsPerPage} OFFSET ${rowsPerPage*(page-1)};
      `
      const news = (await db.query(query)).rows

      res.status(200).json(news)
    } catch (error) {
      const message = 'Не удалось получить список новостей!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  };

  // Запрос одной новости
  async getOneNews(req, res) {
    console.log('request: one news')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const newsId = Number(req.params.id)

      let query =  `SELECT title, date, preview, document FROM news WHERE id = ${newsId};`
      const news = (await db.query(query)).rows[0]

      res.status(200).json(news)
    } catch (error) {
      const message = 'Не удалось получить новость!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  };

  async createNews(req, res) {
    console.log('request: create news')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      // Достаем данные из запроса
      const {title, date, document, fileName, facultyId} = req.body
      // Запрос
      let query = `
        INSERT INTO news (title, date, preview, document, id_faculty)
        VALUES (
          '${title}',
          '${date}',
          '${fileName}',
          '${document}',
           ${facultyId}
        );
      `
      await db.query(query)
      // Удаление тегов с сохраненого файла
      await minioClient.removeObjectTagging('images', fileName)
      res.status(200).json({message: 'Новость успешно добавлена'})
    } catch (error) {
      const message = 'Не удалось создать новость!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  }


  // Запрос на редактирование новости
  async updateNews(req, res) {
    console.log('request: update news')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {id, title, date, document, fileName} = req.body

      const query = `
        UPDATE news SET
          title    = '${title}',
          date     = '${date}',
          document = '${document}',
          preview  = '${fileName}'
        WHERE id = ${id};
      `
      await db.query(query)
      // Удаление тегов с сохраненого файла
      await minioClient.removeObjectTagging('images', fileName)
      res.status(200).json({message: 'Новость успешно обновлена!'})
    } catch (error) {
      const message = 'Не удалось обновить новость!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  }

  // Запрос на удаление новости
  async deleteNews(req, res) {
    console.log('request: delete news')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id} = req.params

      const query = `DELETE FROM news WHERE id = ${id};`

      await db.query(query)
      res.status(200).json({message: 'Новость успешно удалена!'})
    } catch (error) {
      const message = 'Не удалось удалить новость!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  }
}

module.exports = new NewsController()