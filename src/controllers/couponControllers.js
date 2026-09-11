import couponModels from "../models/couponModels.js";

const list = async (req, res) => {
    try {
        const couponList = await couponModels.list()
        if (couponList.length == 0) {
            return res.status(404).json("No results")
        }
        return res.status(200).json(couponList)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const find = async (req, res) => {
    try {
        const id = parseInt(req.params.couponId)
        const findCoupon = await couponModels.find({ id })
        if (findCoupon.length == 0) {
            return res.status(404).json("No results")
        }
        return res.status(200).json(findCoupon)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const insert = async (req, res) => {
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
const remove = async (req, res) => {
    try {
        const id = parseInt(req.params.couponId)
        const signedSlip = await couponModels.find({ id })
        console.log(signedSlip[0].assinado);

        if (signedSlip[0].assinado == true) {
            return res.status(409).json("Cupom fechado, não será possivel excluir")
        }
        const removeCoupon = await couponModels.remove({ id })
        return res.status(200).json(removeCoupon)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
export default {
    list,
    find,
    insert,
    remove
}