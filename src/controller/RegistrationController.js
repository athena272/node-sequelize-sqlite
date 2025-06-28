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
                student_id: Number(student_id),
                status: 'matriculado'
            })

            if (registrationByStudent) {
                return res.status(200).json(registrationByStudent)
            }

            return res.status(404).json({ "message": `${this.serviceEntity} not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }
}

// Singleton instance
module.exports = RegistrationController