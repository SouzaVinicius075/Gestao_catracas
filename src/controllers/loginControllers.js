import usersModels from "../models/usersModels.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const auth = async (req, res) => {
    try {

        const findUser = await usersModels.find({ "email": { contains: req.body.email, mode: "insensitive" } })

        if (findUser.length == 0 || !await bcrypt.compare(req.body.senha, findUser[0].senha)) {
            return res.status(404).json("No Results Bro")
        }
        delete findUser[0].senha


        const token = jwt.sign(findUser[0], process.env.JWT_SECRET, {
            expiresIn: '1H'
        })
        return res.status(200).json(token)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const resetPassword = async (req, res) => {
    try {

    } catch (error) {

    }
}

export default {
    auth
}