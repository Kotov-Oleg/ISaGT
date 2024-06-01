const Router = require('express')
const router = new Router()

// Подключение роутеров
router.use('/user',   require('./userRouter'))
router.use('/admin',  require('./adminRouter'))
router.use('/event',  require('./eventRouter'))
router.use('/news',   require('./newsRouter'))
router.use('/image',  require('./imageRouter'))
router.use('/page',   require('./pageRouter'))
router.use('/slider', require('./sliderRouter'))


module.exports = router


