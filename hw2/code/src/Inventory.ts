import { ItemWeightComparator } from "./ItemWeightComparator";
import { Sword } from "./Sword";
import { ItemComparator } from "./ItemComparator";
import { Item } from "./Item";

export class Inventory {
  items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  sort(comparator?: ItemComparator) {
    if (comparator) {
      this.items = this.items.sort(comparator.compare);
      return this.items;
    }

    this.items = this.items.sort((a, b) => a.value - b.value);
    return this.items;
  }

  toString(): string {
    return this.items.map((item) => item.toString()).join(", ");
  }
}

const INVENTORY = new Inventory([
  new Sword(30.4219, 0.7893, 300, 1.032),
  new Sword(30.4219, 0.7893, 200, 3.032),
  new Sword(30.4219, 0.7893, 700, 0.032),
]);

console.log(INVENTORY, "inventory");
console.log(INVENTORY.sort(new ItemWeightComparator()), "inventory");
console.log(INVENTORY.toString(), "inventory");
