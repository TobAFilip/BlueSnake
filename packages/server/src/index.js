import { config } from "dotenv";

config();

import { main } from "./main.js";

main().catch((err) => {
    console.log(err);
});