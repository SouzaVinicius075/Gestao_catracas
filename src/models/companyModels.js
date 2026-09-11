
import prisma from "../config/prisma.js";


const listwithCC = () => {
    return prisma.empresas.findMany({
        include: {
            centros_custo: true
        }
    })
}
const find = (objectFilter) => {
    return prisma.empresas.findMany({
        where: objectFilter,
        include: {
            centros_custo: true
        }
    })
}
const insert = (companyInsertData) => {
    return prisma.empresas.create({
        data: companyInsertData
    })
}
const remove = (objectFilter) => {
    return prisma.empresas.delete({
        where: objectFilter
    })
}
const update = (objectFilter, updateData) => {
    return prisma.empresas.update({
        data: updateData,
        where: objectFilter
    })
}
export default {
    listwithCC,
    find,
    insert,
    update,
    remove
}