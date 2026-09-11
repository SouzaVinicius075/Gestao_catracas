import { Router } from "express";
import companyControllers from "../controllers/companyControllers.js";

const routes = Router()

routes.get('/', companyControllers.list)
    .get('/:companyId', companyControllers.find)
    .post('/', companyControllers.insert)
    .put('/:cnpj', companyControllers.update)

export default routes