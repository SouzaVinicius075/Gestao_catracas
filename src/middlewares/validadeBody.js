import couponSchema from '../schemas/couponSchema'
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

export default {
    couponBody
}