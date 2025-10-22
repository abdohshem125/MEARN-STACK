// Define Pizza States
export const STATE_IN_PROGRESS = "IN_PROGRESS";
export const STATE_READY_FOR_REVIEW = "READY_FOR_REVIEW";
export const STATE_DONE = "DONE";

// Base State
class PizzaState {
  handle(pizza) {
    console.log(`Pizza "${pizza.name}" is in an undefined state.`);
  }
}

// Concrete States
export class InProgressState extends PizzaState {
  handle(pizza) {
    console.log(`Pizza "${pizza.name}" is being prepared`);
  }
}

export class ReadyForReviewState extends PizzaState {
  handle(pizza) {
    console.log(`Pizza "${pizza.name}" is mid rare`);
  }
}

export class DoneState extends PizzaState {
  handle(pizza) {
    console.log(`Pizza "${pizza.name}" is cooked`);
  }
}

// Context (Pizza Order)
export default class Pizza {
  constructor(name) {
    this.name = name;
    this.state = null;
  }

  setState(state) {
    this.state = state;
    this.state.handle(this);
  }
}
