import {Router} from "express"
import {fetchPosts} from "./post.controller.js"
import {uploadPost} from "./post.controller.js"
import authenticateUser from "../../middleware/auth.middleware.js";
const router = Router()



router.get("/",authenticateUser,fetchPosts);
router.post("/", authenticateUser, uploadPost);

export default router