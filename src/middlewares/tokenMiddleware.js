import jwt from 'jsonwebtoken';
import usersModels from '../models/usersModels.js';

const validate = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json("Não autorizado");
        };

        let token = authorization.replace('Bearer', '').trim();
        const userLogged = jwt.verify(token, process.env.JWT_SECRET);
        const { iat, exp, ...userData } = userLogged;
        req.user = userData;
        next();
    } catch (error) {
        return res.status(401).json('Tu não ta logado irmão')
    }
}

export default {
    validate
}