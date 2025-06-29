const Controller = require('./Controller.js')
const RegistrationServices = require('../services/RegistrationServices.js')

const registrationServices = new RegistrationServices()

class RegistrationController extends Controller {
    constructor() {
        super(registrationServices)
    }

    async store(req, res) {
        try {
            const { student_id } = req.params;
            const bodyData = req.body;

            const registrationData = {
                ...bodyData,
                student_id: Number(student_id)
            };

            const newRegistration = await this.serviceEntity.store(registrationData);
            return res.status(201).json({ message: "Stored register successfully", newRegistration });
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` });
        }
    }

    async getRegistrationsByStudent(req, res) {
        try {
            const { student_id } = req.params

            const registrationByStudent = await registrationServices.showAndCount({
                where: {
                    student_id: Number(student_id),
                    status: 'matriculado'
                },
                // limit: 2,
                order: [['id', 'DESC']]
            })

            if (registrationByStudent) {
                return res.status(200).json(registrationByStudent)
            }
            return res.status(404).json({ "message": `${this.serviceEntity} not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    async getCrowdedCourses(req, res) {
        try {
            const courseCapacity = 2
            const crowdedCourses = await registrationServices.showAndCount({
                where: {
                    status: 'matriculado'
                },
                attributes: ['course_id'],
                group: ['course_id'],
                having: Sequelize.literal(`count(course_id) >= ${courseCapacity}`)
            })

            if (crowdedCourses) {
                return res.status(200).json(crowdedCourses)
            }
            return res.status(404).json({ "message": `${this.serviceEntity} not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }
}

// Singleton instance
module.exports = RegistrationController