const Router = require('express')
const router = new Router()
const StaticController = require('../controllers/imageController')

router.post('/', StaticController.saveImage)


module.exports = router