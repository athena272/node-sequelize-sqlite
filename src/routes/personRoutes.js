const { Router } = require('express')
const PersonController = require('../controller/PersonController.js')
const RegistrationController = require('../controller/RegistrationController.js')
const personController = new PersonController()
const registrationController = new RegistrationController()

const router = Router()
//Person routes
router.get('/people', (req, res) => personController.index(req, res))
router.get('/people/all', (req, res) => personController.getAllPeople(req, res))
router.get('/people/:id', (req, res) => personController.show(req, res))
router.post('/people', (req, res) => personController.store(req, res))
router.put('/people/:id', (req, res) => personController.update(req, res))
router.delete('/people/:id', (req, res) => personController.delete(req, res))
//Registration routes
router.get('/people/:student_id/registration', (req, res) => personController.getActiveRegistrations(req, res))
router.get('/people/:student_id/registration/all', (req, res) => personController.getRegistrations(req, res))
router.get('/people/:student_id/registration/confirmed', (req, res) => registrationController.getRegistrationsByStudent(req, res))
router.get('/people/registration/crowded', (req, res) => registrationController.getCrowdedCourses(req, res))
router.get('/people/:student_id/registration/:id', (req, res) => registrationController.showWhere(req, res))
router.post('/people/:student_id/registration', (req, res) => registrationController.store(req, res))
router.put('/people/:student_id/registration/:id', (req, res) => registrationController.update(req, res))
router.delete('/people/:student_id/registration/:id', (req, res) => registrationController.delete(req, res))

module.exports = router