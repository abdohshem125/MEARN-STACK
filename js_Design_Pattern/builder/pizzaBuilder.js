import Pizza from "./pizza.js";

export default class PizzaBuilder {
  constructor() {
    this.Pizza = new Pizza();
  }

  size(size) {
    this.Pizza.size = size;
    return this;
  }

  toppings(toppings) {
    this.Pizza.toppings.push(toppings);
    return this;
  }

  Sauce(sauce) {
    this.Pizza.sauce = sauce;
    return this;
  }

  cook() {
    return this.Pizza;
  }
}
