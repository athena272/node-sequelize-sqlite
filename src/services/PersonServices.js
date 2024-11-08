const Services = require('./Services.js')

class PersonServices extends Services {
    constructor() {
        super('Person')
    }

    async getRegistrationsByStudent(id) {
        const student = await super.show(id)
        const listRegistrations = await await student.getEnrolledClasses()
        return listRegistrations
    }
}

module.exports = PersonServices