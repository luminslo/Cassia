import { CommandOptions } from "../types/command";
import { EventOptions } from "../types/event";

export class Event {
  public options: EventOptions;
  constructor(data: EventOptions) {
    this.options = data;
  }
}

export class Command {
  options: CommandOptions;
  constructor(data: CommandOptions) {
    this.options = data;
  }

  toOBJ() {
    return this.options;
  }
}
