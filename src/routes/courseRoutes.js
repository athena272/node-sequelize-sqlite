const { Router } = require('express')
const CourseController = require('../controller/CourseController.js')
const courseController = new CourseController()

const courseRouter = Router()

courseRouter.get('/courses', (req, res) => courseController.getCourses(req, res))
courseRouter.get('/courses/:id', (req, res) => courseController.show(req, res))
courseRouter.post('/courses', (req, res) => courseController.store(req, res))
courseRouter.put('/courses/:id', (req, res) => courseController.update(req, res))
courseRouter.delete('/courses/:id', (req, res) => courseController.delete(req, res))

module.exports = courseRouter