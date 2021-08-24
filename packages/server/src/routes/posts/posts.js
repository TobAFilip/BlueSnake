import express from "express";
const postRouter = express.Router();

import { authMiddleware } from "../../utils/authMiddleware.js";
import { Post } from "../../models/Post.js";

// Get all posts
postRouter.get("/list-posts", authMiddleware, async (req, res) => {
    // Fetch DB for posts
    const posts = await Post.find().exec();
    res.status(200).send({
        posts: posts
    });
});

// Create new post
postRouter.post("/create", authMiddleware, async (req, res) => {

});

export default postRouter;