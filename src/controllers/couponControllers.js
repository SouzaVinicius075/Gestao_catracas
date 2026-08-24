import couponModels from "../models/couponModels.js";

const list = (req, res) => {
    try {
        const couponList = await couponModels.list()
        if (couponList.length == 0) {
            return res.status(404).json("No results")
        }
        return
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const find = (req, res) => {
    try {
        const findCoupon = await couponModels.find({})
        if (findCoupon.length == 0) {
            return res.status(404).json("No results")
        }
        return res.status(200).json(findCoupon)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const insert = (req, res) => {
    try {
        const { id_centro_custo, id_servico, quantidade, assinado = false } = req.body
        const couponInsertData = {
            id_centro_custo, id_servico, quantidade, assinado, created_by: req.user.id
        }

        const insertCoupon = await couponModels.insert(couponInsertData)
        return res.status(200).json(insertCoupon)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
export default {
    list,
    find,
    insert
}