import { Weapon } from "./Weapon";
export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("bow", value, weight, baseDamage, 25, baseDurability, 45);
  }

  polish() {
    if (this.getDurability() < 1) {
      this.damageModifier = this.damageModifier + this.baseDamage * 0.25;
    }
  }
}
