
const dataSource = require('../database/models')
const Services = require('./Services.js')

class PersonServices extends Services {
    constructor() {
        super('Person')
        this.registrationServices = new Services('Registration')
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

    async cancelRegistration(student_id) {
        return dataSource.sequelize.transaction(async (transaction) => {
            await super.update({ isActive: false }, { id: student_id }, transaction)
            await this.registrationServices.update({ status: 'cancelado' }, { student_id: student_id }, transaction)

        })
    }
}

module.exports = PersonServices