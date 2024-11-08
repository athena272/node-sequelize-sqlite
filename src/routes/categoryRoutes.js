const { Router } = require('express')
const CategoryController = require('../controller/CategoryController.js')
const categoryController = new CategoryController()

const categoryRouter = Router()

categoryRouter.get('/people', (req, res) => categoryController.index(req, res))
categoryRouter.get('/people/:id', (req, res) => categoryController.show(req, res))
categoryRouter.post('/people', (req, res) => categoryController.store(req, res))
categoryRouter.put('/people/:id', (req, res) => categoryController.update(req, res))
categoryRouter.delete('/people/:id', (req, res) => categoryController.delete(req, res))

module.exports = categoryRouter