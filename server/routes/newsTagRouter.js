const Router = require('express')
const router = new Router()
const newsTagController = require('../controllers/newsTagController')
const authMiddleware = require('../middleware/authMiddleware')
const checkAccess = require('../middleware/checkAccessMiddleware')

// router.get('/', authMiddleware, newsTagController.getTags)
router.get('/', newsTagController.getTags)

module.exports = router