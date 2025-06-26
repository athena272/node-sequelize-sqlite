const Controller = require('./Controller.js')
const RegistrationServices = require('../services/RegistrationServices.js')

const registrationServices = new RegistrationServices()

class RegistrationController extends Controller {
    constructor() {
        super(registrationServices)
    }

    async store(req, res) {
        try {
            const { studentId } = req.params;
            const bodyData = req.body;

            const registrationData = {
                ...bodyData,
                student_id: Number(studentId)
            };

            const newRegistration = await this.serviceEntity.store(registrationData);
            return res.status(201).json({ message: "Stored register successfully", newRegistration });
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` });
        }
    }
}

// Singleton instance
module.exports = RegistrationController