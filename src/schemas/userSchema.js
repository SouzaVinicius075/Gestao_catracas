import yup from './yup.js';

const userSchema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    id_acesso: yup.string().required(),
    senha: yup.string().required()

})

export default userSchema