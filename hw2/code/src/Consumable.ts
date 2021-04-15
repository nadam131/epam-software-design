import { Item } from "./Item";

export class Consumable extends Item {
  consumed: boolean = false;
  spoiled: boolean = true;

  use() {
    if (!this.consumed) return this.eat();
    return `There is nothing left of the ${this.name} to consume`;
  }

  eat() {
    this.consumed = true;
    if (this.spoiled) {
      return `You eat the ${this.name}. You feel sick.`;
    }

    return `You eat the ${this.name}.`;
  }
}

const CONS = new Consumable("bread", 200, 10);

console.log(CONS.use());
console.log(CONS.use());
console.log(CONS.use());
