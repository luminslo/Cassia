import { Client as C } from "discord.js";
import { ClientUtil } from "../util/util.js";
export class Client extends C {
  data;
  util;
  constructor(data) {
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
