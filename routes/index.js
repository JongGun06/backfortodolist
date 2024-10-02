let Router = require('express')
let dbRouter = require('./dbRouter')
let router = new Router()
router.use('/db', dbRouter)

module.exports = router
