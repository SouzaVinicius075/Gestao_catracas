import accessModels from "../../models/turnstile/accessModels.js";
import servicesModels from "../../models/servicesModels.js";

const list = async (req, res) => {
    try {
        const acessos = await accessModels.getAccessesByDate(req.query.date);
        const arrayServicos = await servicesModels.list()
        const acessosComServico = acessos.map((acesso) => {

            return (function defineServico(horaPassagem, servicos) {
                let hora = new Date(horaPassagem).toLocaleTimeString()
                let servicoEncontrado = 0

                for (let servico of servicos) {
                    if (hora >= servico.horaInicio && hora <= servico.horaFim) {

                        acesso.servico = servico.descricao
                        servicoEncontrado = 1
                        break
                    }
                }
                if (servicoEncontrado == 0) {
                    acesso.servico = "Não encontrado"
                }

                return acesso
            })(acesso.DataHora, arrayServicos);
        })

        const dadosTratados = acessosComServico.reduce((acc, dado) => {
            const servico = dado['servico']

            const refeitorio = dado['i.descricao']
            if (acc[servico] == undefined) {
                acc[servico] = {}
            }
            if (acc[servico][refeitorio] == undefined) {
                acc[servico][refeitorio] = {}
            }

            const empresa = dado['e.descricao']
            if (acc[servico][refeitorio][empresa] == undefined) {
                acc[servico][refeitorio][empresa] = []
            }
            acc[servico][refeitorio][empresa].push(dado)

            return acc
        }, {})

        const quantidades = Object.entries(dadosTratados).reduce((acc, [chave, valor]) => {
            let servicoNome = chave
            acc.servico[servicoNome] = {
                total: 0
            }
            Object.entries(valor).map(([chaveRef, valorRef]) => {
                acc.servico[servicoNome][chaveRef] = {
                    total: 0
                }
                Object.entries(valorRef).map(([chaveEmp, valorEmp]) => {
                    acc.servico[servicoNome][chaveRef][chaveEmp] = valorEmp.length
                    acc.servico[servicoNome][chaveRef].total += valorEmp.length
                    acc.servico[servicoNome].total += valorEmp.length
                })
            })
            return acc
        }, { servico: {} })

        return res.status(200).json(quantidades)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const clientsByServices = async (req, res) => {
    try {
        const { startDate, endDate } = req.query
        const { companiesId } = req.body
        const getAccesses = await accessModels.getClientsByServices(companiesId, startDate, endDate)
        const arrayServicos = await servicesModels.list()

        let dadosTratados = getAccesses.reduce((acc, funcionario) => {
            funcionario.hora = new Date(funcionario.DataHora).toLocaleTimeString()
            funcionario.data = new Date(funcionario.DataHora).toLocaleDateString()
            funcionario.DataHora = new Date(funcionario.DataHora).toLocaleString()
            function defineServico(hora, arrayServicos) {
                let servicoEncontrado = 0
                for (let servico of arrayServicos) {
                    if (hora >= servico.horaInicio && hora <= servico.horaFim) {
                        funcionario.servico = servico.descricao
                        servicoEncontrado = 1
                        break
                    }
                }
                if (servicoEncontrado == 0) {
                    funcionario.servico = "Nao localizado"
                }

            }

            defineServico(funcionario.hora, arrayServicos)
            let clienteNome = funcionario.empresa
            let servicoNome = funcionario.servico
            let localNome = funcionario.Descricao
            let pessoaNome = funcionario.nome
            if (acc[clienteNome] == undefined) {
                acc[clienteNome] = {}
            }
            if (acc[clienteNome][servicoNome] == undefined) {
                acc[clienteNome][servicoNome] = {}
            }
            if (acc[clienteNome][servicoNome][localNome] == undefined) {
                acc[clienteNome][servicoNome][localNome] = {}
            }
            if (acc[clienteNome][servicoNome][localNome][pessoaNome] == undefined) {
                acc[clienteNome][servicoNome][localNome][pessoaNome] = []
            }
            acc[clienteNome][servicoNome][localNome][pessoaNome].push(funcionario.DataHora)

            return acc
        }, {})
        return res.status(200).json(dadosTratados)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
export default {
    list,
    clientsByServices
}