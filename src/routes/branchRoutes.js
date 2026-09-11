import { Router } from "express";
import branchControllers from "../controllers/branchControllers.js";

const routes = Router();
routes.post('/', branchControllers.insert)

export default routes