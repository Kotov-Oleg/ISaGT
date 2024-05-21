const Router = require('express')
const router = new Router()
const eventsController = require('../controllers/eventsController')
const authMiddleware = require('../middleware/authMiddleware')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/', eventsController.getEvents)
router.get('/page_count', eventsController.getEventsPageCount)
router.get('/admin', eventsController.getEventsAdmin)
router.get('/:id', eventsController.getOneEvent)

router.post('/', checkAccess('events'), eventsController.createEvent)

router.put('/', checkAccess('events'), eventsController.updateEvent)

router.delete('/', checkAccess('events'), eventsController.deleteEvent)

module.exports = router