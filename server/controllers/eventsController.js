const db = require('../db/db');

// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const minioClient = require("../db/minioConnect");
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
      setTimeout(res.status(200).json(count), 10000)
    } catch (error) {
      const message = 'Не удалось получить количество страниц!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  };

  // Запрос списка мероприятий
  async getEvents(req, res) {
    console.log('request: all_events')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {q, rowsPerPage, page, filter} = req.query
      const qLower = q.toLowerCase()

      let query =  `
        SELECT id, title, date, preview, time
        FROM events WHERE lower(title) LIKE '%${qLower}%'
        ${filter === 'today' ? 'AND date <= CURRENT_DATE' : ''}            
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

  // Запрос списка мероприятий для админки
  async getEventsAdmin(req, res) {
    console.log('request: all_events')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {q, rowsPerPage, page} = req.query
      const qLower = q.toLowerCase()

      let query =  `
        SELECT id, title, date, time
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

  // Запрос мероприятия
  async getOneEvent(req, res) {
    console.log('request: one event')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const eventsId = Number(req.params.id)

      let query =  `
        SELECT *
        FROM events WHERE id = ${eventsId}
      `
      const news = await db.query(query)

     res.status(200).json(news.rows[0])
    } catch (error) {
      const message = 'Не удалось загрузить мероприятие!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  };

  async createEvent(req, res) {
    console.log('request: create event')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {title, date, time, document, fileName} = req.body

      // Запрос
      let query = `
        INSERT INTO events (title, date, time, preview, document)
        VALUES (
          '${title}',
          '${date}',
          '${time}',
          '${fileName}',
          '${document}'
        )
      `
      console.log('query', query)
      await db.query(query)
      // Удаление тегов с сохраненого файла
      await minioClient.removeObjectTagging('images', fileName)
      res.status(200).send('Мероприятие успешно создано!')
    } catch (error) {
      const message = 'Не удалось создать мероприятие!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  }

  // Запрос на редактирование новости
  async updateEvent(req, res) {
    console.log('request: update event')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {id, title, date, time, document, fileName} = req.body

      const query = `
        UPDATE event SET
          title = '${title}',
          date = '${date}',
          time = '${time}',
          document = '${document}',
          preview = '${fileName}'
        WHERE id = ${id};
      `
      await db.query(query)
      res.status(200).json({message: 'Мероприятие успешно обновлено!'})
    } catch (err) {
      const message = 'Не удалось обновить мероприятие!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Запрос на удаление новости
  async deleteEvent(req, res) {
    console.log('request: delete event')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id} = req.params

      const query = `DELETE FROM event WHERE id = ${id}`

      await db.query(query)
      res.status(200).json({message: 'Мероприятие успешно удалено!'})
    } catch (err) {
      const message = 'Не удалось удалить мероприятие!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

}

module.exports = new EventsController()