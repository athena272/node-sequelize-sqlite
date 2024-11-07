const database = require('../models')

class Services {
    constructor(modelName) {
        this.model = modelName
    }

    // List all registers
    async index() {
        return await database[this.model].findAll()
    }
}

module.exports = Services