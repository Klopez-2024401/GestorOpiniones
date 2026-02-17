import { Router } from "express";
import { createComment, updateComment, deleteComment } from "./comment.controller.js";
import { validateJWT } from "../middleware/validate-jwt.js";

const router = Router();

router.post('/', validateJWT, createComment);
router.put('/:id', validateJWT, updateComment);
router.delete('/:id', validateJWT, deleteComment);

export default router;
