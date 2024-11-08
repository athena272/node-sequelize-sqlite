const Controller = require('./Controller.js')
const CourseServices = require('../services/CourseServices.js')

const courseServices = new CourseServices()

class CourseController extends Controller {
    constructor() {
        super(courseServices)
    }
}

// Singleton instance
module.exports = CourseController