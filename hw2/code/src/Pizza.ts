import { Consumable } from "./Consumable";
class Pizza extends Consumable {
  private slicesEaten: number = 0;
  constructor(public numberOfSlices: number, public spoiled: boolean) {
    super("Pizza", 200, 20);
  }

  eat() {
    if (this.numberOfSlices > this.slicesEaten) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed();
      }

      return "You eat a slice of the pizza";
    } else {
      return this.use();
    }
  }
}

export default Pizza;

const pizza = new Pizza(12, false);

console.log(pizza, "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
console.log(pizza.eat(), "pizza");
