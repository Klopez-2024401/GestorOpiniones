import { Router } from "express";
import { createPost, updatePost, deletePost } from "./post.controller";
import { validateJWT } from "../middleware/validate-jwt.js";

const router = Router();

router.post('/', validateJWT, createPost);
router.put('/:id', validateJWT, updatePost);
router.delete('/:id', validateJWT, deletePost);

export default router;