import express from "express";
const authRouter = express.Router();

import * as bcrypt from "bcrypt";
import { uuid } from "uuidv4";
import * as jwt from "jsonwebtoken";

import { User } from "../../models/User.js";
import { Response } from "../../utils/response.js";
import { hashPass } from "../../utils/hashPassword.js";

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
            res.status(400).json(new Response("Invalid username", undefined));
        }

        // Debug
        console.log(password);
        console.log(await bcrypt.hash(password, 10));

        // Compare user password
        await bcrypt.compare(password, user.password, (match) => {
            if (match) {
                // Generate token
                user.token = jwt.sign({
                    uid: user._id,
                }, JWTSecret, {
                    expiresIn: "2h"
                });

                res.status(200).json(new Response(undefined, user));
            }
        });

        // Invalid password
        res.status(400).json(new Response("Invalid password", undefined))
    } catch (err) {
        // Server error
        res.status(500).json(new Response("Server error", undefined));
        console.log(err);
    }
});

// Test
authRouter.get("/test-create-user", async (req, res) => {
    const password = hashPass("password");

    console.log(password);

    const user = new User({
        name: "Jake",
        username: "Jake123",
        email: "jake@email.com",
        password: password
    });



    await user.save();

    res.send(user);
});

export default authRouter;