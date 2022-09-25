import { cassia } from "../index.js";
import { Event } from "../structs/deps.js";
import { logger } from "../structs/logger.js";
const wow = new Event({
    name: "ready",
    once: true,
    payload: () => {
        logger.log("info", `${cassia.user?.tag} is online!`);
    },
});
export default wow;
