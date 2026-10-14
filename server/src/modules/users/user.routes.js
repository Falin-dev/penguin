import {Router} from "express"
import multer from "multer"
import {getUsers, updateProfile } from "./user.controller.js";
import authenticateUser from "../../middleware/auth.middleware.js";
const router = Router();
const upload = multer({
    storage:multer.memoryStorage()
})


router.get("/all", authenticateUser, getUsers )
router.patch("/profile",authenticateUser, upload.single("profilePicture") , updateProfile)
export default router