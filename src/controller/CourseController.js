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

        try {
            const coursesList = await courseServices.index(where)
            if (coursesList) {
                return res.status(200).json(coursesList)
            }

            return res.status(404).json({ "message": `${this.serviceEntity} not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }


}

// Singleton instance
module.exports = CourseController