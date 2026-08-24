import prisma from "../config/prisma.js";

const list = () => {
    return prisma.Comandas.findMany()
}
const find = (objectFilter) => {
    return prisma.comandas.findMany({
        where: objectFilter
    })
}
const insert = (couponInsertData) => {
    return prisma.comandas.create({
        data: couponInsertData
    })
}
const remove = (objectFilter) => {
    return prisma.comandas.delete({
        where: objectFilter
    })
}


export default {
    list,
    find,
    insert,
    remove
}