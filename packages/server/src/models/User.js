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

// Hash user's password before save
/*
userSchema.pre("save", (next) => {
    const user = this;
    const SALT_FACTOR = 10;

    // Check if password is edited
    if (!this.isModified("password")) {
        return next();
    }

    // Generate salt
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        // If error, return it
        if (err) {
            return next(err);
        }

        // Hash password using salt
        bcrypt.hash(this.password, salt, (err, hash) => {
            // If error, return it
            if (err) {
                return next();
            }

            // Save hashed password
            user.password = hash;
            next();
        })
    });
});
*/

// Make sure that user doesn't have any posts
userSchema.pre("remove", (next) => {
    Post.find({ user: this.id }, (err, posts) => {
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