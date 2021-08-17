import express from "express";
import mongoose from "mongoose"

import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import router from "./routes/router.js";

export const main = async () => {
    // Express setup
    const app = express();
    const port = 4000;

    // Connect to DBx
    mongoose.connect("mongodb+srv://NodeServer:KTxhPzoHhAqWZKPy@bluesnakecluster.v4cw4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
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

    // Register router
    app.use("/api", router)
    // Listen on port 4000
    app.listen(port, () => {
        console.log(`[Server]: Listening on port ${port}`);
    });
}