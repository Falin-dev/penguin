import {Router} from "express"
import {getUsers, updateProfile } from "./user.controller.js";
import authenticateUser from "../../middleware/auth.middleware.js";
const router = Router();

router.get("/all", authenticateUser, getUsers )
router.patch("/profile",authenticateUser, updateProfile)
export default router