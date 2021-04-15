import { Weapon } from "./Weapon";
export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("sword", value, weight, baseDamage, 25, baseDurability, 45);
  }

  polish() {
    if (this.baseDamage <= 100) {
      this.damageModifier = this.damageModifier + this.baseDamage * 0.25;
    }
  }
}
