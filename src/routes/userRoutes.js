import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import userMiddlewares from "../middlewares/userMiddlewares.js";

const routes = Router()
routes.post('/', userMiddlewares.validateBody, userControllers.insert)
    .get('/', userControllers.list)
    .get('/:userEmail', userControllers.find)

export default routes