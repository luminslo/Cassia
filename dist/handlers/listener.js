import fs from "fs";
import { logger } from "../structs/logger.js";
async function ListenerHandler(client) {
    async function loadListeners() {
        const files = fs.readdirSync(`${client.data.listenerDirectory}`);
        files.forEach(async (file) => {
            const listener = await client.util.import(`../../${client.data.listenerDirectory}/${file}`);
            listener.options.once
                ? client.once(listener.options.name, listener.options.payload)
                : client.on(listener.options.name, listener.options.payload);
        });
        logger.info("Listeners loaded.");
    }
    "listenerDirectory" in client.data
        ? fs.existsSync(`${process.cwd()}/${client.data.listenerDirectory}`)
            ? loadListeners()
            : logger.error(`The listener directory "${client.data.listenerDirectory}" does not exist!`)
        : logger.error("There is no listener directory specified in the client options!");
}
export default ListenerHandler;
