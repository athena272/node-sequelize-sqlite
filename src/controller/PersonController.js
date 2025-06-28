const Controller = require('./Controller.js')
const PersonServices = require('../services/PersonServices.js')

const personServices = new PersonServices()

class PersonController extends Controller {
    constructor() {
        super(personServices)
    }

    async getActiveRegistrations(req, res) {
        try {
            const { student_id } = req.params
            const listRegistrations = await personServices.getActiveRegistrationsByStudent(Number(student_id))
            if (listRegistrations) {
                return res.status(200).json(listRegistrations)
            }

            return res.status(404).json({ "message": `Register not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    async getRegistrations(req, res) {
        try {
            const { student_id } = req.params
            const listRegistrations = await personServices.getRegistrationsByStudent(Number(student_id))
            if (listRegistrations) {
                return res.status(200).json(listRegistrations)
            }

            return res.status(404).json({ "message": `Register not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    async getAllPeople(req, res) {
        try {
            const peopleList = await personServices.getPeopleAllRecordsScope()
            return res.status(200).json(peopleList)
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }
}

// Singleton instance
module.exports = PersonController