const db = require('../db')

// форматирование JSON
const { Formatter } = require('fracturedjsonjs');
const formatter = new Formatter();

class FacultyController {

  // Список факультетов
  async getFaculties(req, res) {
    console.log('request: faculties')
    try {
      let query = `SELECT id, full_name AS "fullName", abbreviation, alias, mail, phone, address FROM faculty;`
      const faculties = (await db.query(query)).rows

      res.status(200).json(faculties)
    } catch (err) {
      const message = 'Не удалось получить список факультетов!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Добавление факультета
  async postFaculty(req, res) {
    console.log('request: post faculty')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {fullName, abbreviation, alias, mail, phone, address} = req.body

      const query = `
        INSERT INTO faculty (full_name, abbreviation, alias, mail, phone, address)
        SELECT '${fullName}', '${abbreviation}', '${alias}', '${mail}', '${phone}', '${address}';
      `
      await db.query(query)

      res.status(200).json({message: 'Факультет успешно добавлен'})
    } catch (err) {
      const message = 'Не удалось добавить факультет!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Обновление факультета
  async updateFaculty(req, res) {
    console.log('request: update faculty')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {id: facultyId, fullName, abbreviation, alias, mail, phone, address} = req.body

      const query = `
        UPDATE faculty SET
          full_name    = '${fullName}',
          abbreviation = '${abbreviation}',
          alias        = '${alias}',
          mail         = '${mail}',
          phone        = '${phone}',
          address      = '${address}'
        WHERE id = ${facultyId};
      `
      await db.query(query)

      res.status(200).json({message: 'Факультет успешно обновлен'})
    } catch (err) {
      const message = 'Не удалось обновить факультет!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Удаление факультета
  async deleteFaculty(req, res) {
    console.log('request: delete faculty')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id: facultyId} = req.params

      const query = `DELETE FROM faculty WHERE id = ${facultyId};`
      await db.query(query)

      res.status(200).json({message: 'Факультет успешно удален!'})
    } catch (err) {
      const message = 'Не удалось удалить факультет!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

}

module.exports = new FacultyController()