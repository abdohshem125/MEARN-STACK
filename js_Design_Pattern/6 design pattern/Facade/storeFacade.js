export class Inventory {
  check(product) {
    console.log(`Checking stock for ${product}`);
  }
}

export class Payment {
  pay(amount) {
    console.log(`Paying $${amount}`);
  }
}

export class Shipping {
  ship(product) {
    console.log(`Shipping ${product}`);
  }
}

export default class StoreFacade {
  constructor() {
    this.inventory = new Inventory();
    this.payment = new Payment();
    this.shipping = new Shipping();
  }

  buyProduct(product, amount) {
    this.inventory.check(product);
    this.payment.pay(amount);
    this.shipping.ship(product);
    console.log(`${product} purchase completed!`);
  }
}
