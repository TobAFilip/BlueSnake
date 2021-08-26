import express from "express";
const router = express.Router();

import authRouter from "./auth/auth.js"
import postRouter from "./posts/posts.js";

// Register specific routers
router.use("/auth", authRouter);
router.use("/posts", postRouter)

export default router;