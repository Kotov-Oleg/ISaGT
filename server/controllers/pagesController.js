const db = require('../db/db');

// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const {query} = require("express");
const formatter = new Formatter();

class PagesController {

  async getPages(req, res) {
    console.log('request: page')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      let query = `
        SELECT * FROM pages;
      `
      const pages = await db.query(query)
      res.status(200).json(pages.rows)
    } catch (error) {
      const message = 'Не удалось получить список страниц!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  }

  // Запрос одной новости
  async getPage(req, res) {
    console.log('request: page')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {page_name} = req.params

      let query =  `
        SELECT *
        FROM pages WHERE name = '${page_name}' 
      `

      const page = await db.query(query)

      res.status(200).json(page.rows[0])
    } catch (error) {
      const message = 'Не удалось получить страницу!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  };
}

module.exports = new PagesController()