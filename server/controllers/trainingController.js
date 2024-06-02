const db = require('../db/db')

// форматирование JSON
const { Formatter } = require('fracturedjsonjs');
const formatter = new Formatter();

class TrainingController {

  // Список направлений подготовки
  async getTrainings(req, res) {
    console.log('request: trainings')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id: departmentId} = req.params

      let query = `
        SELECT id, code, title, description, form_of_study AS "formOfStudy",
               duration_of_study AS "durationOfStudy", budget_or_contract AS "budgetOrContract"
        FROM training_direction WHERE id_department = ${departmentId};
      `
      const trainings = (await db.query(query)).rows

      res.status(200).json(trainings)
    } catch (err) {
      const message = 'Не удалось получить список направлений подготовки!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Одно направление подготовки
  async getOneTraining(req, res) {
    console.log('request: one training')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id: trainingId} = req.params

      let query = `
        SELECT code, title, description, form_of_study AS "formOfStudy",
               duration_of_study AS "durationOfStudy", budget_or_contract AS "budgetOrContract"
        FROM training_direction WHERE id = ${trainingId};
      `
      const training = (await db.query(query)).rows[0]

      res.status(200).json(training)
    } catch (err) {
      const message = 'Не удалось получить направление подготовки!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Добавление направления подготовки
  async postTraining(req, res) {
    console.log('request: post training')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {code, title, description, formOfStudy, durationOfStudy, budgetOrContract, idDepartment} = req.body

      const query = `
        INSERT INTO training_direction
          (code, title, description, form_of_study, duration_of_study, budget_or_contract, id_department)
        SELECT
          '${code}', '${title}', '${description}', '${formOfStudy}', '${durationOfStudy}', '${budgetOrContract}', ${idDepartment};
      `
      await db.query(query)

      res.status(200).json({message: 'Направление подготовки успешно добавлено'})
    } catch (err) {
      const message = 'Не удалось добавить направление подготовки!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Обновление направления подготовки
  async updateTraining(req, res) {
    console.log('request: update training')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {id: trainingId, code, title, description, formOfStudy, durationOfStudy, budgetOrContract} = req.body

      const query = `
        UPDATE training_direction SET
          code               = '${code}',
          title              = '${title}',
          description        = '${description}',
          form_of_study      = '${formOfStudy}',
          duration_of_study  = '${durationOfStudy}',
          budget_or_contract = '${budgetOrContract}'
        WHERE id = ${trainingId};
      `
      await db.query(query)

      res.status(200).json({message: 'Направление подготовки успешно обновлено'})
    } catch (err) {
      const message = 'Не удалось обновить направление подготовки!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Удаление направления подготовки
  async deleteTraining(req, res) {
    console.log('request: delete training')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const {id: trainingId} = req.params

      const query = `DELETE FROM training_direction WHERE id = ${trainingId};`
      await db.query(query)

      res.status(200).json({message: 'Направление подготовки успешно удалено!'})
    } catch (err) {
      const message = 'Не удалось удалить направление подготовки!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

}

module.exports = new TrainingController()