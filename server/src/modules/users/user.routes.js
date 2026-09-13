import {Router} from "express"
import {getUsers } from "./user.controller.js";
const router = Router();

router.get("/all", getUsers )

export default router