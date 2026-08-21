import prisma from "../config/prisma.js";

const insert = (userData) => {
    const insertUser = prisma.Usuarios.create({
        data: userData
    })
    return insertUser
}

const find = (objectFilter) => {
    const findUser = prisma.Usuarios.findMany({
        where: objectFilter
        // select: { id: true, id_acesso: true, nome: true, email: true }
    })

    return findUser
}
const list = () => {
    const listUsers = prisma.Usuarios.findMany({
        select: { id: true, id_acesso: true, nome: true, email: true }
    })

    return listUsers
}
const update = (objectFilter, updateData) => {
    const updateUser = prisma.Usuarios.update({
        where: objectFilter,
        data: updateData
    })
    return updateUser
}
const remove = (objectFilter) => {
    const removeUser = prisma.Usuarios.delete({
        where: objectFilter
    })
    return removeUser
}
export default {
    insert,
    find,
    list,
    update,
    remove
}