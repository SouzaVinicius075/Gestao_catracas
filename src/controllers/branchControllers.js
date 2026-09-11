import branchModels from "../models/branchModels.js";

const list = async (req, res) => {
    try {

    } catch (error) {

    }
}
const insert = async (req, res) => {
    try {
        const { id_matriz, descricao } = req.body
        const insertBranch = await branchModels.insert({
            id_matriz, descricao
        })
        return res.status(200).json(insertBranch)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export default {
    insert
}