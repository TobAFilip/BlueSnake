import "dotenv";
import { main } from "./main.js";

main().catch(err => {
    console.log("[Server Error]: " + err)
});