import { Item } from "./Item";

export class Weapon extends Item {
  readonly MODIFIER_CHANGE_RATE = 50;
  baseDamage: number;
  damageModifier: number;
  baseDurability: number;
  durabilityModifier: number;

  constructor(
    name: string,
    value: number,
    weight: number,
    baseDamage: number,
    damageModifier: number,
    baseDurability: number,
    durabilityModifier: number
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.damageModifier = damageModifier;
    this.baseDurability = baseDurability;
    this.durabilityModifier = durabilityModifier;
  }

  public compareTo(other: Item): number {
    if (this.value === other.value) {
      return this.name.localeCompare(other.name);
    }
    return this.value > other.value ? 1 : -1;
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability() {
    return this.baseDurability + this.durabilityModifier;
  }

  public toString() {
    return `${this.name} - Value: ${this.value}, Weight: ${
      this.weight
    }, Durability: ${this.getDurability()}`;
  }

  public use() {
    if (this.getDurability() <= 0) {
      return `”You can't use the ${this.name}, it is broken.”`;
    }

    this.baseDurability = this.baseDurability - this.MODIFIER_CHANGE_RATE;

    if (this.getDurability() <= 0) {
      return `You use the ${
        this.name
      } , dealing ${this.getDamage()} points of damage. The ${
        this.name
      } breaks.`;
    }

    return `You use the ${
      this.name
    }, dealing ${this.getDamage()} points of damage.`;
  }
}
