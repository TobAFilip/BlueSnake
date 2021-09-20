import jwt from "jsonwebtoken";

import { Response } from "./response.js";



export const checkAuth = async (req, res, next) => {
    const JWTSecret = process.env.JWT_SECRET;
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        if (token) {
            try {
                req.decoded = jwt.verify(token, JWTSecret);
            } catch (err) {
                console.log(err);
                res.json(new Response(["Invalid/blacklisted authentication token"], undefined));
            }
        } else {
           res.json(new Response(["Authentication token must be 'Bearer [token]"], undefined));
        }
    } else {
        res.json(new Response(["Authorization is required here"], undefined));
    }

    next();
};