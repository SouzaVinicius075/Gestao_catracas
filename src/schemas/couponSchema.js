import yup from './yup.js';

const couponSchema = yup.object().shape({
    id_centro_custo: yup.number().positive().required(),
    id_servico: yup.number().positive().required(),
    quantidade: yup.number().positive().required(),
    assinado: yup.boolean()
})

export default couponSchema