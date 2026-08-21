import { Router } from "express";
import loginControllers from "../controllers/loginControllers.js";

const routes = Router()

routes.post('/', loginControllers.auth)

export default routes