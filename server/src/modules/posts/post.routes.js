import {Router} from "express"
import {fetchPosts} from "./post.controller.js"
import {uploadPost} from "./post.controller.js"
import authenticateUser from "../../middleware/auth.middleware.js";
import multer from "multer" 
const router = Router()
const upload = multer({storage : multer.memoryStorage()});

router.get("/",authenticateUser,fetchPosts);
router.post("/", authenticateUser,upload.single('image'), uploadPost);

export default router