import companyModels from "../models/companyModels.js";

const list = async (req, res) => {
    try {
        const companiesList = await companyModels.listwithCC()
        if (companiesList.length == 0) {
            return res.status(204).json()
        }
        return res.status(200).json(companiesList)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const find = async (req, res) => {
    try {
        const id = parseInt(req.params.companyId)
        const findCompany = await companyModels.find({ id })
        if (findCompany.length == 0) {
            return res.status(204).json()
        }
        return res.status(200).json(findCompany)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const insert = async (req, res) => {
    try {
        const { cnpj, nome } = req.body

        if ((await companyModels.find({ cnpj })).length != 0) {
            return res.status(409).json("Company is already registered bro")
        }
        const insertData = { cnpj, nome }
        const insertCompany = await companyModels.insert(insertData)
        return res.status(200).json(insertCompany)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const update = async (req, res) => {
    try {
        const { nome, cnpj, active } = req.body
        const updateData = Object.fromEntries(
            Object.entries({
                nome, cnpj, active
            }).filter(([_, valor]) => valor !== undefined)
        )
        if ((await (companyModels.find({ cnpj: req.params.cnpj }))).length == 0) {
            return res.status(404).json("Bro, no company to update")
        }
        const updateCompany = await companyModels.update({ cnpj: req.params.cnpj }, updateData)
        return res.status(200).json(updateCompany)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
export default {
    list,
    find,
    insert,
    update
}