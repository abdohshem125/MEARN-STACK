import StudentSeniorFactory1 from "./StudentFactory/StudentSeniorFactory1.js";
import StudentGraduateFactory1 from "./StudentFactory/StudentGraduateFactory1.js";
//////////////////////////////
import Document from "./DocumentHeadFoot/Document.js";
import DocumentPrototype from "./DocumentHeadFoot/DocumentPrototype.js";
////////////////////////////////
import Singleton from "./singleton/singlton.js";
/////////////////////////////////////////////

import PizzaBuilder from "./builder/pizzaBuilder.js";

//abstract factory
console.log("------------- ABSTRACT FACTORY -----------------");

let studentSenior1 = new StudentSeniorFactory1();
studentSenior1.Senior1();
studentSenior1.Senior2();

let studentGraduate1 = new StudentGraduateFactory1();
studentGraduate1.graduate1();
studentGraduate1.graduate2();

// PROTOTYPE
console.log("------------- PROTOTYPE -----------------");

const doc = new Document(
  "THIS IS THE HEADER SECTION",
  "THIS IS THE FOOTER SECTION",
  10,
  "TEXT"
);
const proto = new DocumentPrototype(doc);

const clonedDoc = proto.clone();

console.log("MAIN DOCUMENT:");
doc.show();

console.log("CLONED DOCUMENT:");
clonedDoc.show();

console.log("------------- SINGLRTON -----------------");

const inst1 = new Singleton();
inst1.increment();
console.log(inst1.getCount());
const inst2 = new Singleton();
console.log(inst2.getCount());

console.log("------------- PIZZA -----------------");

const pizza1 = new PizzaBuilder();

pizza1.size("mid");
pizza1.Sauce("PPQ");
pizza1.toppings("Cheese");
pizza1.toppings("Mushrooms");
pizza1.toppings("Tomato");

const completePizza = pizza1.cook()
completePizza.display()