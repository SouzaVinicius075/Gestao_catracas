import usersModels from '../models/usersModels.js';
import bcrypt from 'bcrypt';
import userSchema from '../schemas/userSchema.js';

const insert = async (req, res) => {
    try {
        const { id_acesso, email, nome, senha } = req.body
        const insertObject = { id_acesso, email, nome, senha }
        insertObject.senha = await bcrypt.hash(req.body.senha, 12)
        const insertUser = await usersModels.insert(insertObject)


        return res.status(200).json(insertUser)
    } catch (error) {

        return res.status(500).json(error.message)
    }
}

export default {
    insert
}