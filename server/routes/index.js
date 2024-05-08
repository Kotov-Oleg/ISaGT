const Router = require('express')
const router = new Router()

// Подключение роутеров
router.use('/user', require('./userRouter'))
router.use('/admin', require('./adminRouter'))

// router.use('/news_tag', require('./newsTagRouter'))
router.use('/news', require('./newsRouter'))
router.use('/image', require('./imageRouter'))


module.exports = router