import prisma from "../config/prisma.js";

const list = () => {
    return prisma.centros_custo.findMany({
        include: {
            empresa: true
        }
    })
}
const find = () => {
    return prisma.centros_custo.findMany({
        where: objectFilter,
        include: {
            empresa: true
        }
    })
}
const insert = (insertData) => {
    return prisma.centros_custo.create({
        data: insertData
    })
}
const update = (objectFilter, updateBranchData) => {
    return prisma.centros_custo.update({
        where: objectFilter,
        data: updateBranchData
    })
}

export default {
    list,
    find,
    insert,
    update
}