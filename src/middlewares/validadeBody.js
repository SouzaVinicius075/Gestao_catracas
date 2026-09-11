import couponSchema from '../schemas/couponSchema.js'
import companySchema from '../schemas/companySchema.js'

const couponBody = async (req, res, next) => {
    try {
        await couponSchema.validate(req.body)
        next()
    } catch (error) {
        return res.status(404).json({
            message: "Faltam campos no body"
        })
    }
}
const companyBody = async (req, res, next) => {
    try {
        await companySchema.validate(req.body)
        next()
    } catch (error) {
        return res.status(404).json({
            message: "Faltam campos no body"
        })
    }
}
export default {
    couponBody,
    companyBody
}