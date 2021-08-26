import mongoose from "mongoose";
import * as bcrypt from "bcrypt";

import { Post } from "./Post.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean
    },
    confid: {
        type: String
    }
});

// Make sure that user doesn't have any posts
userSchema.pre("remove", (next) => {
    Post.find({ userid: this._id }, (err, posts) => {
        if (err) {
            return next(err);
        } else if (posts.length > 0) {
            return next(new Error("This user still has posts!"));
        } else {
            return next();
        }
    })
});

export const User = mongoose.model("User", userSchema);