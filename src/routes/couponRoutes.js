import { Router } from "express";
import validadeBody from "../middlewares/validadeBody.js";
import couponControllers from "../controllers/couponControllers.js";

const routes = Router()

routes.post('/', validadeBody.couponBody, couponControllers.insert)
    .get('/:couponId', couponControllers.find)
    .get('/', couponControllers.list)

export default routes