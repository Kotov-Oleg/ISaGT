const Router = require('express')
const router = new Router()
const teacherController = require('../controllers/teacherController')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/:id', teacherController.getTeachers)

router.post('/', checkAccess('faculty'), teacherController.postTeacher)
router.put('/',  checkAccess('faculty'), teacherController.updateTeacher)

router.delete('/:id', checkAccess('faculty'), teacherController.deleteTeacher)

module.exports = router

