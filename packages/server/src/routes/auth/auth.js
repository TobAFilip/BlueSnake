import express from "express";
const authRouter = express.Router();

import * as bcrypt from "bcrypt";
import { uuid } from "uuidv4";
import jwt from "jsonwebtoken";

import { User } from "../../models/User.js";
import { Response } from "../../utils/response.js";

const SALT_FACTOR = 10;

// Register user
authRouter.post("/register", async (req, res) => {

});

// Login user
authRouter.post("/login", async (req, res) => {
    try {
        const JWTSecret = process.env.JWT_SECRET;
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username }).exec();

        if (!user) {
            res.json(new Response(["Invalid username"], undefined));
        } else {
            // Compare password
            if (await bcrypt.compare(password, user.password)) {
                // Generate token
                const token = jwt.sign({
                    uid: user._id,
                }, JWTSecret, {
                    expiresIn: "2h"
                });

                // Log that user logged in
                console.log(`User ${user._id} logged in`);

                res.json(new Response([undefined], {
                    user,
                    token: token
                }));
            } else {
                // Invalid password
                res.json(new Response(["Invalid password"], undefined));
            }
        }
    } catch (err) {
        // Server error
        res.json(new Response(["Server error"], undefined));
        console.log(err);
    }
});

// Create test user
authRouter.get("/test-create-user", async (req, res) => {

    // Generate salt
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        // If error, log it
        if (err) {
            console.log(err);
        }

        // Password
        const password = "password";

        // Hash password using salt
        bcrypt.hash(password, salt, (err, hash) => {
            // If error, log it
            if (err) {
                console.log(err);
            }

            console.log(hash);

            // If successful, create user
            if (hash) {

                // Create user
                const user = new User({
                    name: "Jake",
                    username: "Jake123",
                    email: "jake@email.com",
                    password: hash
                });

                user.save();

                // Send user back
                res.json(new Response([undefined], user));
            }
        });
    });
});

export default authRouter;