import {Router} from "express"
import {addUser} from "./auth.controller.js"
import {loginUser} from "./auth.controller.js"
const router = Router()

router.post("/add", addUser);
router.post("/login",loginUser);

export default router