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
            const { id } = req.params
            const bodyData = req.body
            const isUpdate = await this.serviceEntity.update({
                id,
                newData: bodyData,
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
            const { id } = req.params
            const registerFound = await this.serviceEntity.delete(Number(id))
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