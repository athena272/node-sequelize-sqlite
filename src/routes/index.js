const express = require('express')
const personRouter = require('./personRoutes.js')

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).json({ "message": "Server on 🔥" }))

    app.use(express.json(), personRouter)
}

module.exports = routes