const taskController = require('../controllers/taskController')
const checkRole = require('../middleware/checkRoleMiddleware')
const Router = require('express')
const router = new Router()

// ограничение доступа под вопросом
router.post('/registration', checkRole('ADMIN'), taskController.registration)
router.delete('/', checkRole('ADMIN'), taskController.delete)
router.get('/', taskController.getAll)
router.get('/:id', taskController.getOne)

module.exports = router;