const db = require('../db');

// Шифрование
const CryptoJS = require("crypto-js");
const KEY = process.env.CRYPT_SECRET_KEY;

// Форматирование JSON
const {Formatter} = require('fracturedjsonjs');
const formatter = new Formatter();

class AdminController {

  // Запрос списка администратовров
  async getAdmins(req, res) {
    console.log('request: admins')
    try {
      const query = `
        SELECT
          ad.id, ad.surname, ad.name, ad.patronymic, ad.login, ad.password,
          json_build_object(
            'super',  ac.super,
            'slider', ac.slider,
            'news',   ac.news,
            'pages',  ac.pages
          ) AS access
        FROM admin ad JOIN access ac ON ad.id = ac.id;
      `
      const admins = (await db.query(query)).rows

      res.status(200).json(admins)
    } catch (err) {
      const message = '[admin:32] Не удалось получить список администратовров!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Проверка уникальности логина
  async isLoginUnique(req, res) {
    console.log('request: is login unique')
    console.log(`data:    ${formatter.Serialize(req.query)}`)
    try {
      const {login} = req.query

      const query = `SELECT NOT exists (SELECT 1 FROM admin WHERE login = '${login}') AS value;`
      const {value} = (await db.query(query)).rows[0]

      res.status(200).json(value)
    } catch (err) {
      const message = '[admin:50] Не удалось проверить уникальность логина!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Создание нового администратора
  async postAdmin(req, res) {
    console.log('request: create admin')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {surname, name, patronymic, login, password, access} = req.body

      let query = `
        INSERT INTO
          admin (surname, name, patronymic, login, password)
        VALUES (
          '${surname}',
          '${name}',
           ${patronymic === '' ? null : `'${patronymic}'`},
          '${login}',
           ${password === '' ? null : `'${CryptoJS.AES.encrypt(password, KEY).toString()}'`}
        );

        SELECT CAST(currval('admin_id_seq') AS integer) AS "adminId";
      `
      const {adminId} = (await db.query(query))[1].rows[0]

      query = `
        -- Создание доступов администратора
        INSERT INTO access (id, super, slider, news, pages)
        SELECT ${adminId}, super, slider, news, pages
        FROM json_populate_recordset(null::json_access, '${JSON.stringify(access)}');
      `
      await db.query(query)

      res.status(200).json({message: 'Администратор успешно добавлен!'})
    } catch (err) {
      const message = '[admin:88] Не удалось добавить администратора!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Обновление данных администратора
  async updateAdmin(req, res) {
    console.log('request: update admin')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {id: adminId, surname, name, patronymic, login, password, access} = req.body

      let query = `
        UPDATE admin SET (surname, name, patronymic, login, password)
          surname    = '${surname}',
          name       = '${name}',
          patronymic = ${patronymic === '' ? null : `'${patronymic}'`},
          login      = '${login}',
          password   = ${password === '' ? null : `'${CryptoJS.AES.encrypt(password, KEY).toString()}'`}
        WHERE id = ${adminId};

        -- Обновление доступов администратора
        UPDATE access SET
          super  = subq.super,
          slider = subq.slider,
          news   = subq.news,
          pages  = subq.pages,
        FROM (
          SELECT super, slider, news, pages
          FROM json_populate_recordset(null::json_access, '${JSON.stringify(access)}')
        ) subq
        WHERE id = ${adminId};
      `
      await db.query(query)

      res.status(200).json({message: 'Данные администратора успешно обновлены!'})
    } catch (err) {
      const message = '[admin:126] Не удалось обновить данные администратора!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Удаление администратора
  async deleteAdmin(req, res) {
    console.log('request: delete admin')
    console.log(`data:    ${formatter.Serialize(req.params)}`)
    try {
      const adminId = Number(req.params.id)

      const query = `
        DELETE FROM access WHERE id = ${adminId};
        DELETE FROM admin WHERE id = ${adminId};
      `
      await db.query(query)

      res.status(200).json({message: 'Администратор успешно удален!'})
    } catch (err) {
      const message = '[admin:147] Не удалось удалить администратора!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

  // Запрос списка доступов
  async getAccessOptions(req, res) {
    console.log('request: access options')
    try {
      const query = `
        SELECT column_name AS access
        FROM information_schema.columns
        WHERE table_name = 'access' AND column_name != 'id';
      `
      const options = (await db.query(query)).rows

      res.status(200).json(options)
    } catch (err) {
      const message = '[admin:169] Не удалось получить список доступов!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(500).json({message})
    }
  }

}

module.exports = new AdminController()