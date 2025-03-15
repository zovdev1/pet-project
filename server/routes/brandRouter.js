const Router = require('express');
const brandController = require('../controllers/brandController')

const router = Router()

router.get('/', brandController.getAll)
router.post('/', brandController.create)


module.exports = router