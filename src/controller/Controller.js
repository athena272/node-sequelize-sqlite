const convertStringIdsToNumbers = require('../utils/stringHelperConverter.js');

class Controller {
    constructor(serviceEntity) {
        this.serviceEntity = serviceEntity;
    }

    async index(req, res) {
        try {
            const registerList = await this.serviceEntity.index()
            if (registerList) {
                return res.status(200).json(registerList)
            }

            return res.status(404).json({ "message": `${this.serviceEntity} not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params
            const registerFound = await this.serviceEntity.show(Number(id))
            if (registerFound) {
                return res.status(200).json(registerFound)
            }

            return res.status(404).json({ "message": `${this.serviceEntity} not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    async showWhere(req, res) {
        try {
            const { ...params } = req.params
            // console.log("🚀 ~ Controller ~ showWhere ~ params:", params)
            const where = convertStringIdsToNumbers(params)
            // console.log("🚀 ~ Controller ~ showWhere ~ where:", where)

            const registerFound = await this.serviceEntity.showWhere(where)
            if (registerFound) {
                return res.status(200).json(registerFound)
            }

            return res.status(404).json({ "message": `${this.serviceEntity} not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    async store(req, res) {
        try {
            const bodyData = req.body
            const newData = await this.serviceEntity.store(bodyData)
            return res.status(201).json({ message: "Stored register successfully", newData })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    async update(req, res) {
        try {
            const { ...params } = req.params
            const where = convertStringIdsToNumbers(params)
            const bodyData = req.body

            const isUpdate = await this.serviceEntity.update({
                newData: bodyData,
                where
            })
            if (isUpdate) {
                return res.status(201).json({ message: "Updated register successfully", id: `Line id: ${id}`, isUpdate })
            }

            return res.status(404).json({ "message": `${this.serviceEntity} not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }

    async delete(req, res) {
        try {
            const { ...params } = req.params
            const where = convertStringIdsToNumbers(params)

            const registerFound = await this.serviceEntity.delete(where)
            if (registerFound) {
                return res.status(201).json({ message: "Deleted register successfully", registerFound })
            }

            return res.status(404).json({ "message": `${this.serviceEntity} not found` })
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - request failed` })
        }
    }
}

module.exports = Controller;