import express from "express";
const postRouter = express.Router();

import { checkAuth } from "../../utils/check-auth.js";
import { Post } from "../../models/Post.js";

// Get all posts
postRouter.get("/list-posts", checkAuth, async (req, res) => {
    try {
        // Fetch DB for posts
        const posts = await Post.find().exec();

        res.status(200).send({
            posts: posts
        });
    } catch (err) {
        console.log(err)
    }
});

// Create new dive journey post
postRouter.post("/create-dive-journey", checkAuth, async (req, res) => {
    try {
        let postData = {
            title: req.body
        };

        // Generate post
        const post = new Post({
            title: req.body.title,

        });

        // Save post
    } catch (err) {
        console.log(err);
    }
});

export default postRouter;