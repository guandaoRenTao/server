const projectController = require('../controllers/projectController')
const checkRole = require('../middleware/checkRoleMiddleware')
const Router = require('express')
const router = new Router()

// ограничение доступа под вопросом
router.post('/registration', checkRole('ADMIN'), projectController.registration)
router.delete('/', checkRole('ADMIN'), projectController.delete)
router.get('/', projectController.getAll)
router.get('/:id', projectController.getOne)

module.exports = router;