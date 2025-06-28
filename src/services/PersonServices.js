const Services = require('./Services.js')

class PersonServices extends Services {
    constructor() {
        super('Person')
    }

    async getActiveRegistrationsByStudent(id) {
        const student = await super.show(id)
        const listRegistrations = await student.getEnrolledClasses()
        return listRegistrations
    }
          
    async getRegistrationsByStudent(id) {
        const student = await super.show(id)
        const listRegistrations = await student.getAllRegistrations()
        return listRegistrations
    }

    async getPeopleAllRecordsScope() {
        const peopleList = await super.indexByScope('allRecords')
        return peopleList
    }
}

module.exports = PersonServices