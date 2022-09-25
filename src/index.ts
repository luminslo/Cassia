import { Client } from "./structs/client.js";
import ListenerHandler from "./handlers/listener.js";

import { GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";

dotenv.config();

export const cassia = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
  prefix: "c.",
  token: process.env.TOKEN,
  listenerDirectory: "dist/listeners",
});

ListenerHandler(cassia);
cassia.init();
