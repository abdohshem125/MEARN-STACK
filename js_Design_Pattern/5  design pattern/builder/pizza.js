export default class Pizza {
  constructor() {
    this.size = null;
    this.toppings = [];
    this.sauce = null;
  }

  display() {
    console.log("size" , this.size); 
    console.log("sauce" , this.sauce); 
    console.log("toppings" , (this.toppings).join(", ")); 
  }
}