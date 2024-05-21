const Router = require('express')
const router = new Router()
const ImageController = require('../controllers/imageController')

router.post('/', ImageController.saveImage)
router.delete('/', ImageController.deleteImages)

module.exports = router