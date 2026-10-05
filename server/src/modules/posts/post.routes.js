import {Router} from "express"
import {fetchPosts} from "./post.controller.js"
import {uploadPost, postLike, deletePostLike} from "./post.controller.js"
import authenticateUser from "../../middleware/auth.middleware.js";
import multer from "multer" 
const router = Router()
const upload = multer({storage : multer.memoryStorage()});

router.get("/",authenticateUser,fetchPosts);
router.post("/", authenticateUser,upload.single('image'), uploadPost);
router.post("/:postId/like", authenticateUser, postLike)
router.delete("/:postId/like", authenticateUser, deletePostLike)
export default router