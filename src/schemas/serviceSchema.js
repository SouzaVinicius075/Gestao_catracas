import yup from './yup.js';

const serviceSchema = yup.object().shape({
    id: yup.number().positive().required(),
    descricao: yup.string().required()
})

export default serviceSchema