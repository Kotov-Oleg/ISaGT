const Router = require('express')
const router = new Router()
const eventsController = require('../controllers/eventsController')
const authMiddleware = require('../middleware/authMiddleware')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/', eventsController.getEvents)
router.get('/page_count', eventsController.getEventsPageCount)
router.get('/:id', eventsController.getOneEvent)

// router.post('/', checkAccess('events'), eventsController.createNews)
router.post('/', eventsController.createEvent)

module.exports = router