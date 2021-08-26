import jwt from "jsonwebtoken";

import { User } from "../models/User.js";
import { Response } from "./response.js";

const JWTSecret = process.env.JWT_SECRET;

export const checkAuth = async (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        if (token) {
            try {
                const id = jwt.verify(token, JWTSecret);

                req.user = await User.findById(id).exec();
            } catch (err) {
                console.log(err);
                res.status().json(new Response("Invalid/blacklisted authentication token", undefined));
            }
        } else {
           res.status(400).json(new Response("Authentication token must be 'Bearer [token]", undefined));
        }
    } else {
        res.status(401).json(new Response("Authorization is required here", undefined));
    }

    next();
};