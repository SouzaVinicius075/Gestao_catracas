import serviceSchema from "../schemas/serviceSchema.js"
const validateBody = async (req, res, next) => {
    try {
        await serviceSchema.validate(req.body)
        next()
    } catch (error) {
        return res.status(404).json({
            message: "Faltam campos no body"
        })
    }
}

export default {
    validateBody
}