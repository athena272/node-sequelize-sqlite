const database = require('../models')

class PersonController {
    // List all registers
    static async index(req, res) {
        try {
            const peopleList = await database.Person.findAll()
            if (peopleList) {
                return res.status(200).json(peopleList)
            }

            return res.status(404).json({ "message": "People not found" })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }
}

// Singleton instance
module.exports = PersonController