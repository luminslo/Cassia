import { Message, PermissionResolvable } from "discord.js";

interface BaseOptions {
	name: string;
	description: string;
	devOnly?: boolean;
}

export interface CommandOptions extends BaseOptions {
	triggers?: string[];
	userPermissions?: PermissionResolvable[];
	clientPermissions?: PermissionResolvable[];
	ignoreCooldown?: string[];
	ignorePermissions?: string[];
	payload: CommandPayloadFunction;
}

interface CommandPayloadOptions {
	message?: Message;
	args?: string[];
}

type CommandPayloadFunction = (options: CommandPayloadOptions) => any;
