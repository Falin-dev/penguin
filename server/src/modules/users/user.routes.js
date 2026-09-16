import {Router} from "express"
import {getUsers } from "./user.controller.js";
import authenticateUser from "../../middleware/auth.middleware.js";
const router = Router();

router.get("/all", authenticateUser, getUsers )

export default router