import { ClientEvents, CommandInteraction, Message } from "discord.js";

export interface EventOptions {
  once?: boolean;
  name: keyof ClientEvents;
  payload: OnEventFunction;
}

export interface EventArguments {
  args?: string[];
  message: Message;
  interaction: CommandInteraction;
}

type OnEventFunction = (options: EventArguments) => any;
