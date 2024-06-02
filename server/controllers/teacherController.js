const db = require('../db/db')

// форматирование JSON
const { Formatter } = require('fracturedjsonjs');
const formatter = new Formatter();

class DepartmentController {

  // Список кафедр
  async getTeachers(req, res) {
    console.log('request: teachers')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id: departmentId} = req.params

      let query = `
        SELECT id, name, surname, patronymic, academic, photo, post, description
        FROM teacher WHERE id_department = ${departmentId};
      `
      const teachers = (await db.query(query)).rows

      res.status(200).json(teachers)
    } catch (err) {
      const message = 'Не удалось получить список преподавателей!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Добавление преподавателя
  async postTeacher(req, res) {
    console.log('request: post teacher')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {name, surname, patronymic, academic, photo, post, description, departmentId} = req.body

      const query = `
        INSERT INTO teacher (name, surname, patronymic, academic, photo, post, description, id_department)
        SELECT '${name}', '${surname}', '${patronymic}', '${academic}', '${photo}',
               '${post}', '${description}', ${departmentId};
      `
      await db.query(query)

      res.status(200).json({message: 'Преподаватель успешно добавлен'})
    } catch (err) {
      const message = 'Не удалось добавить преподавателя!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Обновление преподавателя
  async updateTeacher(req, res) {
    console.log('request: update teacher')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {id: teacherId, name, surname, patronymic, academic, photo, post, description, departmentId} = req.body

      const query = `
        UPDATE teacher SET
          name          = '${name}',
          surname       = '${surname}',
          patronymic    = '${patronymic}',
          academic      = '${academic}',
          photo         = '${photo}',
          post          = '${post}',
          description   = '${description}'
          id_department =  ${departmentId}
        WHERE id = ${teacherId};
      `
      await db.query(query)

      res.status(200).json({message: 'Преподаватель успешно обновлен'})
    } catch (err) {
      const message = 'Не удалось обновить преподавателя!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Удаление преподавателя
  async deleteTeacher(req, res) {
    console.log('request: delete teacher')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id: teacherId} = req.params

      const query = `DELETE FROM teacher WHERE id = ${teacherId};`
      await db.query(query)

      res.status(200).json({message: 'Преподаватель успешно удален!'})
    } catch (err) {
      const message = 'Не удалось удалить преподавателя!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

}

module.exports = new DepartmentController()