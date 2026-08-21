import usersModels from '../models/usersModels.js';
import bcrypt from 'bcrypt';
import userSchema from '../schemas/userSchema.js';

const insert = async (req, res) => {
    try {
        const { id_acesso, email, nome, senha } = req.body
        const insertUserObject = { id_acesso, email, nome, senha }
        insertUserObject.senha = await bcrypt.hash(req.body.senha, 12)
        const insertedUser = await usersModels.insert(insertUserObject)


        return res.status(200).json(insertUser)
    } catch (error) {

        return res.status(500).json(error.message)
    }
}
const find = async (req, res) => {
    try {

        const findUser = await usersModels.find({ email: req.params.userEmail })
        return res.status(200).json(findUser)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const list = async (req, res) => {
    try {
        const listUsers = await usersModels.list()
        return res.status(200).json(listUsers)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const update = (req, res) => {
    try {

    } catch (error) {

    }
}

export default {
    insert,
    find,
    list
}