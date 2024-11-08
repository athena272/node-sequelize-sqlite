const { Router } = require('express')
const CategoryController = require('../controller/CategoryController.js')
const categoryController = new CategoryController()

const categoryRouter = Router()

categoryRouter.get('/categories', (req, res) => categoryController.index(req, res))
categoryRouter.get('/categories/:id', (req, res) => categoryController.show(req, res))
categoryRouter.post('/categories', (req, res) => categoryController.store(req, res))
categoryRouter.put('/categories/:id', (req, res) => categoryController.update(req, res))
categoryRouter.delete('/categories/:id', (req, res) => categoryController.delete(req, res))

module.exports = categoryRouter