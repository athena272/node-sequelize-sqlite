const database = require('../database/models')

class Services {
    constructor(modelName) {
        this.model = modelName
    }

    // List all registers
    async index() {
        return await database[this.model].findAll()
    }

    async indexByScope(scope) {
        return await database[this.model].scope(scope).findAll()
    }

    async show(id) {
        return await database[this.model].findByPk(id)
    }

    async showWhere(where) {
        return await database[this.model].findOne({ where: { ...where } })
    }

    async store(registerData) {
        return await database[this.model].create(registerData)
    }

    async update({ newData, where }) {
        const listRegisters = await database[this.model].update(newData, {
            where: { ...where },
        })
        if (listRegisters[0] === 0) {
            return false
        }

        return true
    }

    async delete(where) {
        return await database[this.model].destroy({ where: { ...where} })
    }
}

module.exports = Services