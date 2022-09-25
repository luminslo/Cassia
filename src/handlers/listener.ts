import fs from "fs";

import { Client } from "../structs/client.js";
import { Event } from "../structs/deps.js";
import { logger } from "../structs/logger.js";

async function ListenerHandler(client: Client) {
	async function loadListeners() {
		const files = fs.readdirSync(`${client.data.listenerDirectory}`);
		files.forEach(async (file) => {
			const listener: Event = await client.util.import(
				`../../${client.data.listenerDirectory}/${file}`
			);
			listener.options.once
				? client.once(listener.options.name, listener.options.payload as never)
				: client.on(listener.options.name, listener.options.payload as never);
		});

		logger.info("Listeners loaded.");
	}

	"listenerDirectory" in client.data
		? fs.existsSync(`${process.cwd()}/${client.data.listenerDirectory}`)
			? loadListeners()
			: logger.error(
					`The listener directory "${client.data.listenerDirectory}" does not exist!`
			  )
		: logger.error(
				"There is no listener directory specified in the client options!"
		  );
}

export default ListenerHandler;
