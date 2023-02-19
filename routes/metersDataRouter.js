const metersDataController = require('../controllers/metersDataController')
const checkRole = require('../middleware/checkRoleMiddleware')
const Router = require('express')
const router = new Router()

// ограничение доступа под вопросом
router.post('/registration', checkRole('ADMIN'), metersDataController.registration)
router.delete('/', checkRole('ADMIN'), metersDataController.delete)
router.get('/', metersDataController.getAll)
router.get('/:id', metersDataController.getOne)

module.exports = router;