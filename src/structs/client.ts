import { Client as C, Utils } from "discord.js";
import { ClientData } from "../types/client";
import { ClientUtil } from "../util/util.js";

export class Client extends C {
	data: ClientData;
	util: ClientUtil;
	constructor(data: ClientData) {
		super({
			intents: data.intents,
		});

		this.data = data;
		this.util = new ClientUtil();
	}

	init() {
		this.login(this.data.token);
	}
}
