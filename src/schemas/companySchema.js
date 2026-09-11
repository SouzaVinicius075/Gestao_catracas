import yup from './yup.js';

const companySchema = yup.object().shape({
    cnpj: yup.string().length(14),
    nome: yup.string().required(),
    active: yup.boolean()

})

export default companySchema