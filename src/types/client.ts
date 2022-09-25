import { ClientOptions as O } from "discord.js";

export interface ClientData extends O {
	commandDirectory?: string | undefined;
	interactionDirectory?: string | undefined;
	listenerDirectory?: string | undefined;
	developers?: string[] | undefined;
	prefix?: string | undefined;
	token?: string | undefined;
}
