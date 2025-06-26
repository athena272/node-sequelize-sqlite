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

    async store(registerData) {
        return await database[this.model].create(registerData)
    }

    async update({ newData, id }) {
        const listRegisters = await database[this.model].update(newData, {
            where: { id: id },
        })
        if (listRegisters[0] === 0) {
            return false
        }

        return true
    }

    async delete(id) {
        return await database[this.model].destroy({ where: { id: id } })
    }
}

module.exports = Services