import accessesControllers from "../../controllers/turnstile/accessesControllers.js";
import { Router } from "express";

const routes = Router();

routes.get('/', accessesControllers.list)
    .post('/clients', accessesControllers.clientsByServices)

export default routes