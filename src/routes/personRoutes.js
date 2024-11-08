const { Router } = require('express')
const PersonController = require('../controller/PersonController.js')
const personController = new PersonController()

const personRouter = Router()

personRouter.get('/people', (req, res) => personController.index(req, res))
personRouter.get('/people/:id', (req, res) => personController.show(req, res))
personRouter.post('/people', (req, res) => personController.store(req, res))
personRouter.put('/people/:id', (req, res) => personController.update(req, res))
personRouter.delete('/people/:id', (req, res) => personController.delete(req, res))

module.exports = personRouter