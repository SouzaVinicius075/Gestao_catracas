import prisma from "../config/prisma.js";

const list = () => {
    return prisma.comandas.findMany({
        select: {
            id: true,
            id_centro_custo: true,
            quantidade: true,
            assinado: true,
            centro_custo: true,
            servico: {
                select: {
                    descricao: true
                }
            },
            usuario: {
                select: {
                    nome: true
                }
            },
            centro_custo: {
                select: {
                    descricao: true
                }
            }
        }
    })
}
const find = (objectFilter) => {
    return prisma.comandas.findMany({
        where: objectFilter,
        select: {
            id: true,
            id_centro_custo: true,
            quantidade: true,
            assinado: true,
            centro_custo: true,
            servico: {
                select: {
                    descricao: true
                }
            },
            usuario: {
                select: {
                    nome: true
                }
            },
            centro_custo: {
                select: {
                    descricao: true
                }
            }
        }
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