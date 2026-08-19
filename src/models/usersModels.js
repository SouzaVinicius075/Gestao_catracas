import prisma from "../config/prisma.js";

const insert = (userData) => {
    const insertUser = prisma.Usuarios.create({
        data: userData
    })
    return insertUser
}

export default {
    insert
}