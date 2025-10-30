// q1
 const capitalizeText = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("parameter should be string");
  }
  return input.toUpperCase();
};

// q2

 const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};

// q3

 let obj = { id: 1 };
 let obj1 = { x: obj };
 let obj2 = { x: obj };

// q4

 function CheckPositivity(x) {
  if (x > 0) {
    return true;
  } else {
    return false;
  }
}


// q5

 function Mult(x){
  return x*2;
}

 let obj3 = {a: {b: [{x: 1}]}}
