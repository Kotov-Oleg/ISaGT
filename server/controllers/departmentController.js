const db = require('../db')

// форматирование JSON
const { Formatter } = require('fracturedjsonjs');
const formatter = new Formatter();

class DepartmentController {

  // Список кафедр
  async getDepartments(req, res) {
    console.log('request: departments')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id: facultyId} = req.params

      let query = `
        SELECT id, title, description, logo, business_hours AS "businessHours", mail, phone, id_manager AS "managerId"
        FROM department WHERE id_faculty = ${facultyId};
      `
      const departments = (await db.query(query)).rows

      res.status(200).json(departments)
    } catch (err) {
      const message = 'Не удалось получить список кафедр!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Добавление кафедры
  async postDepartment(req, res) {
    console.log('request: post department')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {title, description, logo, businessHours, mail, phone, facultyId, managerId} = req.body

      const query = `
        INSERT INTO department (title, description, logo, business_hours, mail, phone, id_faculty, id_manager)
        SELECT '${title}', '${description}', '${logo}', '${businessHours}', '${mail}',
               '${phone}', ${facultyId}, ${managerId};
      `
      await db.query(query)

      res.status(200).json({message: 'Кафедра успешно добавлена'})
    } catch (err) {
      const message = 'Не удалось добавить кафедру!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Обновление кафедры
  async updateDepartment(req, res) {
    console.log('request: update department')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {id: departmentId, title, description, logo, businessHours, mail, phone, managerId} = req.body

      const query = `
        UPDATE department SET
          title          = '${title}',
          description    = '${description}',
          logo           = '${logo}',
          business_hours = '${businessHours}',
          mail           = '${mail}',
          phone          = '${phone}',
          id_manager     =  ${managerId}
        WHERE id = ${departmentId};
      `
      await db.query(query)

      res.status(200).json({message: 'Кафедра успешно обновлена'})
    } catch (err) {
      const message = 'Не удалось обновить кафедру!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Удаление кафедры
  async deleteDepartment(req, res) {
    console.log('request: delete department')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id: departmentId} = req.params

      const query = `DELETE FROM department WHERE id = ${departmentId};`
      await db.query(query)

      res.status(200).json({message: 'Кафедра успешно удалена!'})
    } catch (err) {
      const message = 'Не удалось удалить кафедру!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

}

module.exports = new DepartmentController()