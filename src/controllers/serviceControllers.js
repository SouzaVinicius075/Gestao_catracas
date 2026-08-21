import servicesModels from "../models/servicesModels.js";


const list = async (req, res) => {
    try {
        const listServices = await servicesModels.list();
        if (listServices.length == 0) {
            return res.status(404).json("No results")
        }
        return res.status(200).json(listServices)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const insert = async (req, res) => {
    try {
        let { id, descricao } = req.body;
        const findService = await servicesModels.find({ OR: [{ descricao: descricao }, { id }] })
        if (findService != 0) {
            res.status(409).json("Service is already registered bro")
        }
        const createService = await servicesModels.insert({ id, descricao })
        return res.status(200).json(createService)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const find = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const findUser = await servicesModels.find({ id })

        return res.status(200).json(findUser)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const update = async (req, res) => {
    try {
        let { id } = req.params
        const { descricao } = req.body
        id = parseInt(id)
        const findService = await servicesModels.find({ id })
        if (findService.length == 0) {
            return res.status(404).json("no Results")
        }
        const updateService = await servicesModels.update({ id }, { descricao })
        return res.status(200).json(updateService)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export default {
    list,
    insert,
    find,
    update
}