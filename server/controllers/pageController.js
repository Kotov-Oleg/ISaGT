const db = require('../db/db');

// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const {query} = require("express");
const formatter = new Formatter();

class PageController {

  async getPages(req, res) {
    console.log('request: pages')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id: facultyId} = req.params

      let query = `SELECT id, alias, document FROM page WHERE id_faculty = ${facultyId};`
      const pages = (await db.query(query)).rows

      res.status(200).json(pages)
    } catch (error) {
      const message = 'Не удалось получить список страниц!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  }

  // Запрос одной новости
  async getPage(req, res) {
    console.log('request: page')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {alias, facultyId} = req.query

      let query =  `SELECT document FROM page WHERE alias = '${alias}' AND id_faculty = ${facultyId};`
      const {document} = (await db.query(query)).rows[0]

      res.status(200).json(document)
    } catch (error) {
      const message = 'Не удалось получить страницу!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${error}`)
      res.status(500).json({message})
    }
  };
}

module.exports = new PageController()