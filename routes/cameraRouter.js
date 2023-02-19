const cameraController = require('../controllers/cameraController')
const checkRole = require('../middleware/checkRoleMiddleware')
const Router = require('express')
const router = new Router()

// ограничение доступа под вопросом
router.post('/registration', checkRole('ADMIN'), cameraController.registration)
router.delete('/', checkRole('ADMIN'), cameraController.delete)
router.get('/', cameraController.getAll)
router.get('/:id', cameraController.getOne)

module.exports = router;