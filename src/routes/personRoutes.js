const { Router } = require('express')
const PersonController = require('../controller/PersonController.js')
const personController = new PersonController()

const personRouter = Router()

personRouter.get('/people', (req, res) => personController.index(req, res))

module.exports = personRouter