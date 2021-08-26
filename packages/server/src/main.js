import express from "express";
import mongoose from "mongoose"

import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import router from "./routes/router.js";

export const main = async () => {
    // Express setup
    const app = express();
    const port = process.env.PORT;

    // Connect to DB
    const mongoUri = process.env.MONGO_URI
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }).catch(err => {
        console.log(err);
    });
    let DB = mongoose.connection;

    DB.on("error", (err) => {
        console.log("[DB Error]: " + err);
    })
    DB.once("open", () => {
        console.log("[DB]: Successfully connected to DB")
    })

    // Express middleware
    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(express.json());

    // Register router
    app.use("/api", router)
    // Listen on port 4000
    app.listen(port, () => {
        console.log(`[Server]: Listening on port ${port}`);
    });
}