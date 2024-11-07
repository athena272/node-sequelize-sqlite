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
}

module.exports = Controller;