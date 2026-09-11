import { Router } from "express";
import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import tokenMiddleware from "../middlewares/tokenMiddleware.js";
import serviceRoutes from './serviceRoutes.js'
import couponRoutes from './couponRoutes.js'
import companyRoutes from './companyRoutes.js'
import accessRoutes from './turnstile/accessRoutes.js'
import branchRoutes from './branchRoutes.js'
const routes = Router()

routes.use('/', authRoutes)
    // .use(tokenMiddleware.validate)
    .use('/users', userRoutes)
    .use('/services', serviceRoutes)
    .use('/coupons', couponRoutes)
    .use('/company', companyRoutes)
    //turnstile
    .use('/turnstile/access', accessRoutes)
    .use('/branch', branchRoutes)

export default routes