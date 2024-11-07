const { Router } = require('express')
const PersonController = require('../controller/PersonController.js')

const personRouter = Router()

personRouter.get('/people', PersonController.index)

module.exports = personRouter