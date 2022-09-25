import { Command } from "../../structs/deps.js";

const ping = new Command({
  name: "ping",
  description: "Returns ping, possibly.",
  triggers: ["ping", "p"],
  payload: ({ message }) => {
    message?.channel.send("wow");
  },
});

console.log(ping.toOBJ());
