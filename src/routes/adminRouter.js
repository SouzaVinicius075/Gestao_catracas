import { Router } from "express";
import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import tokenMiddleware from "../middlewares/tokenMiddleware.js";
import serviceRoutes from './serviceRoutes.js'

const routes = Router()

routes.use('/', authRoutes)
    .use(tokenMiddleware.validate)
    .use('/users', userRoutes)
    .use('/services', serviceRoutes)

export default routes