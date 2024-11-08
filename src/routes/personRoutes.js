const { Router } = require('express')
const PersonController = require('../controller/PersonController.js')
const RegistrationController = require('../controller/RegistrationController.js')
const personController = new PersonController()
const registrationController = new RegistrationController()

const router = Router()
//Person routes
router.get('/people', (req, res) => personController.index(req, res))
router.get('/people/:id', (req, res) => personController.show(req, res))
router.post('/people', (req, res) => personController.store(req, res))
router.put('/people/:id', (req, res) => personController.update(req, res))
router.delete('/people/:id', (req, res) => personController.delete(req, res))
//Registration routes
router.get('/people/:studentId/registration', (req, res) => personController.getRegistrations(req, res))
router.post('/people/:studentId/registration', (req, res) => registrationController.store(req, res))

module.exports = router