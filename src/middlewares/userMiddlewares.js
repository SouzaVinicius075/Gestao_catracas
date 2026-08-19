import userSchema from "../schemas/userSchema.js";
const validateBody = async (req, res, next) => {
    try {
        await userSchema.validate(req.body)
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