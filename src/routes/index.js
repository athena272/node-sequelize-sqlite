const express = require('express')
const personRouter = require('./personRoutes.js')
const categoryRouter = require('./categoryRoutes.js')
const courseRouter = require('./courseRoutes.js')

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).json({ "message": "Server on 🔥" }))

    app.use(express.json(), personRouter, categoryRouter, courseRouter)
}

module.exports = routes