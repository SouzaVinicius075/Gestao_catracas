import { Router } from "express";
import serviceControllers from "../controllers/serviceControllers.js";
import serviceMiddleware from "../middlewares/serviceMiddleware.js";

const routes = Router()

routes.post('/', serviceMiddleware.validateBody, serviceControllers.insert)
    .get('/', serviceControllers.list)
    .get('/:id', serviceControllers.find)
    .put('/:id', serviceControllers.update)

export default routes