export class Event {
  options;
  constructor(data) {
    this.options = data;
  }
}
export class Command {
  options;
  constructor(data) {
    this.options = data;
  }
  toOBJ() {
    return this.options;
  }
}
