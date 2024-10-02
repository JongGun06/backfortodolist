let Router = require('express')
let router = Router()
let dbController = require('../controllers/dbController')

router.post('/', dbController.create)
router.get('/', dbController.get)
router.delete('/', dbController.del)
router.put('/', dbController.update)

module.exports = router