import prisma from "../config/prisma.js";

const list = () => {
    const listServices = prisma.Servicos.findMany()

    return listServices
}
const insert = (insertServiceData) => {
    const insertService = prisma.Servicos.create({ data: insertServiceData })

    return insertService
}
const find = (objectFilter) => {
    return prisma.Servicos.findMany({
        where: objectFilter
    })
}
const update = (objectFilter, updateData) => {
    return prisma.Servicos.update({
        where: objectFilter,
        data: updateData
    })
}
export default {
    list,
    insert,
    find,
    update
}