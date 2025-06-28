const { Op } = require('sequelize')

const Controller = require('./Controller.js')
const CourseServices = require('../services/CourseServices.js')
const { sequelize } = require('../database/models/index.js')

const courseServices = new CourseServices()

class CourseController extends Controller {
    constructor() {
        super(courseServices)
    }

    async getCourses(req, res) {
        const { final_date, start_date } = req.query
        const where = {}

        //if params, create a prop
        start_date || final_date ? where.start_date = {} : null
        //if start_date, add gte
        start_date ? where.start_date[Op.gte] = start_date : null
        //if final_date
        final_date ? where.start_date[Op.lte] = final_date : null
    }
}

// Singleton instance
module.exports = CourseController