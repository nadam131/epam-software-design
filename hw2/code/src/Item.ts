import { Comparable } from "./Comparable";

let id = 1;

export abstract class Item implements Comparable<Item> {
  id: number;
  value: number;
  name: string;
  weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.weight = weight;

    id = id + 1;
  }

  public compareTo(other: Item): number {
    if (this.value === other.value) {
      return this.name.localeCompare(other.name);
    }
    return this.value > other.value ? 1 : -1;
  }

  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }
}
