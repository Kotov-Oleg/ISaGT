const Router = require('express')
const router = new Router()

// Подключение роутеров
router.use('/user', require('./userRouter'))
router.use('/admin', require('./adminRouter'))
router.use('/events', require('./eventsRouter'))
router.use('/news', require('./newsRouter'))
router.use('/image', require('./imageRouter'))
router.use('/pages', require('./pagesRouter'))
router.use('/slider', require('./sliderRouter'))


module.exports = router


