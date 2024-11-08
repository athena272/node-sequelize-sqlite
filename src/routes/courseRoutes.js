const { Router } = require('express')
const CourseController = require('../controller/CourseController.js')
const courseController = new CourseController()

const courseRouter = Router()

courseRouter.get('/people', (req, res) => courseController.index(req, res))
courseRouter.get('/people/:id', (req, res) => courseController.show(req, res))
courseRouter.post('/people', (req, res) => courseController.store(req, res))
courseRouter.put('/people/:id', (req, res) => courseController.update(req, res))
courseRouter.delete('/people/:id', (req, res) => courseController.delete(req, res))

module.exports = courseRouter