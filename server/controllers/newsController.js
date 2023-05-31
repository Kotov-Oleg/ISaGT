const db = require('../db');

class NewsController {

  // получение всех новостей
  async getNews(req, res) {
    console.log('запрос новостей')
    try {
      let query =  `
        SELECT
          id,
          title,
          text,
          cover_path,
          description,
          media_path
        FROM
          news
      `
      const news = await db.query(query)
      res.status(200).json(news.rows)
    } catch (error) {
      console.log(error)
      res.status(500).send('Невозможно выполнить запрос!\n' + String(error))
    }
  };

  // добавление новости
  async createNews(req, res) {
    console.log('запрос создания новости')
    try {
      const {title, text, cover_path, description, media_path} = req.body
      let query = `
        INSERT INTO news (
          title,
          text,
          cover_path,
          description,
          media_path
        ) VALUES (
          '${title}',
          '${text}',
          '${cover_path}',
          '${description}',
          '${media_path}'
        )
      `
      await db.query(query)
      res.status(200).send('Новость успешно добавлена')
    } catch (error) {
      console.log(error)
      res.status(500).send('Невозможно выполнить запрос!\n' + String(error))
    }
  }
  

}

module.exports = new NewsController()