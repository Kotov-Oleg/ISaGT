const db = require('../db/db');
const uuid = require('uuid')
const path = require("node:path");

// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const formatter = new Formatter();

class EventsController {
  // Запрос количества страниц новостей
  async getEventsPageCount(req, res) {
    console.log('request: events page count')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {q, rowsPerPage} = req.query
      const qLower = q.toLowerCase()

      let query =  `
        SELECT CEIL(count(*)/${rowsPerPage}::double precision) AS count
        FROM events WHERE lower(title) LIKE '%${qLower}%'
      `
      const {count} = (await db.query(query)).rows[0]

      res.status(200).json(count)
    } catch (error) {
      const message = 'Не удалось получить количество страниц!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  };

  // Запрос списка мероприятий
  async getEvents(req, res) {
    console.log('request: all_events')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {q, rowsPerPage, page} = req.query
      const qLower = q.toLowerCase()

      let query =  `
        SELECT id, title, date, preview, time
        FROM events WHERE lower(title) LIKE '%${qLower}%'
        LIMIT ${rowsPerPage} OFFSET ${rowsPerPage*(page-1)};
      `
      const events = await db.query(query)

      res.status(200).json(events.rows)
    } catch (error) {
      const message = 'Не удалось получить список мероприятий!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  };

  // Запрос одной новости
  async getOneEvent(req, res) {
    console.log('request: one event')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const eventsId = Number(req.params.id)

      let query =  `
        SELECT *
        FROM news WHERE id = ${eventsId}
      `
      const news = await db.query(query)

      res.status(200).json(news.rows[0])
    } catch (error) {
      const message = 'Не удалось загрузить мероприятие!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  };

  async createEvent(req, res) {
    console.log('request: create event')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      // Достаем данные из запроса
      const {title, date, document} = req.body
      const {preview} = req.files
      console.log('img', preview)
      let fileName = uuid.v4() + '.jpg'
      // Сохраняем файл в папке
      preview.mv(path.resolve(__dirname, '..', 'data', fileName))
      // await img.forEach((i, index) => {
      //   // Создаем имя файла
      //   let fileName = uuid.v4() + '.jpg'
      //   // Сохраняем файл в папке
      //   i.mv(path.resolve(__dirname, '..', 'data', fileName))
      // })
      // Запрос
      // let query = `
      //   INSERT INTO news (title, date, preview, body, photos)
      //   VALUES (
      //     '${title}',
      //     '${date}',
      //     '${preview}',
      //     '${body}',
      //     '${photos}'
      //   )
      // `
      // await db.query(query)
      // res.status(200).send('Новость успешно добавлена')
      res.status(200).send(
        JSON.stringify({
          title,
          date,
          fileName,
          document
        })
      )
    } catch (error) {
      const message = 'Не удалось создать мероприятие!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  };

}

module.exports = new EventsController()