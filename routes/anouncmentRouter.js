const anouncmentController = require('../controllers/anouncmentController')
const checkRole = require('../middleware/checkRoleMiddleware')
const Router = require('express')
const router = new Router()

// ограничение доступа под вопросом
router.post('/registration', checkRole('ADMIN'), anouncmentController.registration)
router.delete('/', checkRole('ADMIN'), anouncmentController.delete)
router.get('/', anouncmentController.getAll)
router.get('/:id', anouncmentController.getOne)

module.exports = router;