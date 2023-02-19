const facilityController = require('../controllers/facilityController')
const checkRole = require('../middleware/checkRoleMiddleware')
const Router = require('express')
const router = new Router()

// ограничение доступа под вопросом
router.post('/registration', facilityController.registration)
router.delete('/', checkRole('ADMIN'), facilityController.delete)
router.get('/', facilityController.getAll)
router.get('/:id', facilityController.getOne)

module.exports = router;