const { MathUtils, obj, sayHelloWorld, DoSomeThing } = require("../index.js");

describe("MathUtils Class", function () {
  let math;

  beforeEach(function () {
    math = new MathUtils();
  });

  it("add two numbers", function () {
    expect(math.sum(2, 3)).toBe(5);
  });

  it("subtract two numbers", function () {
    expect(math.substract(5, 2)).toBe(3);
  });

  it("two numbers", function () {
    expect(math.multiply(3, 4)).toBe(12);
  });

  it("divide two numbers", function () {
    expect(math.divide(10, 2)).toBe(5);
  });

  it("calculate average", function () {
    expect(math.average(10, 20)).toBe(15);
  });

  it("factorial of a number", function () {
    expect(math.factorial(5)).toBe(120);
  });

  it("throw error for negative factorial", function () {
    expect(function () {
      math.factorial(-2);
    }).toThrowError("There is no factorial for negative numbers");
  });

  it(" return true for positive numbers in checkPositivity", function () {
    expect(math.checkPositivity(10)).toBeTrue();
  });

  it("return false for negative numbers in checkPositivity", function () {
    expect(math.checkPositivity(-3)).toBeFalse();
  });
});

describe("obj functions", function () {
  it("should return 'hello' from hello()", function () {
    expect(obj.hello()).toBe("hello");
  });

  it("should return 'world' from world()", function () {
    expect(obj.world()).toBe("world");
  });
});

describe("sayHelloWorld function", function () {
  it("should combine hello() and world() correctly", function () {
    expect(sayHelloWorld(obj)).toBe("hello world");
  });
});

describe("DoSomeThing function", function () {
  it("should call callback with 123 after 1 second", function (done) {
    function callback(value) {
      expect(value).toBe(123);
      done();
    }
    DoSomeThing(callback);
  });
});
