import express from "express";
const postRouter = express.Router();

import { validDiveJourneySchema } from "@bluesnake/common"

import { checkAuth } from "../../utils/check-auth.js";
import { Post } from "../../models/Post.js";
import { User } from "../../models/User.js"
import { formatYupError } from "../../utils/formatYupError.js"
import { Response } from "../../utils/response.js"

// Get all posts
postRouter.get("/list-posts", checkAuth, async (req, res) => {
    try {
        // Fetch DB for posts
        const posts = await Post.find().exec();

        res.status(200).json(new Response([undefined], {
            posts: posts
        }));
    } catch (err) {
        console.log(err)
    }
});

// Create new dive journey post
postRouter.post("/create-dive-journey", checkAuth, async (req, res) => {
    try {
        // Destructure req.body
        const args = {
            title: req.body.title,
            description: req.body.description,
            diveLocation: req.body.diveLocation,
            diveDepth: req.body.diveDepth,
            diveTime: req.body.diveTime,
        };

        // Validate data
        await validDiveJourneySchema.validate(args, { abortEarly: false });

        // Save post
        const post = new Post({
            title: args.title,
            description: args.description,
            diveLocation: args.diveLocation,
            diveDepth: args.diveDepth,
            diveTime: args.diveTime,

            userid: req.decoded.uid,
            likes: 0,
            postType: "dive-journey"
        });

        await post.save();

        // Return data
        res.status(201).json(new Response([undefined], post));
    } catch (err) {
        const errors = formatYupError(err);
        console.log(errors);

        // Return errors
        res.status(400).json(new Response(errors, undefined))
    }
});

export default postRouter;