// import * as chai from "chai";
// const { expect, assert } = chai;
// chai.should();

// import {
//   capitalizeText,
//   createArray,
//   obj,
//   obj1,
//   obj2,
//   CheckPositivity,
//   Mult,
//   obj3,
// } from "../index.js";

///////////////////////////// q1 ////////////////////////////////
describe("Test capitalizeText Function", () => {
  it("function takes a string  it will return a string ", () => {
    expect(capitalizeText("hamada")).to.be.a("string");
  });
  it("function takes a string and return it after capitalize it", () => {
    expect(capitalizeText("hamada")).to.equal("HAMADA");
  });
  it("if the function takes number it will throw type error says parameter should be string", () => {
    expect(() => capitalizeText(12)).to.throw(
      TypeError,
      "parameter should be string"
    );
  });
  it("function accept one param only", () => {
    expect(capitalizeText.length).equal(1);
  });
});

///////////////////////////// q2 ////////////////////////////////

describe("Test createArray Function", () => {
  it("should return an array", () => {
    expect(createArray(3)).to.be.an("array");
    assert.isArray(createArray(3));
    createArray(3).should.be.an("array");
  });

  it("test if we pass 3 it will return array of length 3 and include 1", () => {
    expect(createArray(3)).to.have.lengthOf(3).that.include(1);
  });

  it("should return the right sequense", () => {
    expect(createArray(3)).to.deep.equal([0, 1, 2]);
    expect(createArray(5)).to.deep.equal([0, 1, 2, 3, 4]);

    assert.deepEqual(createArray(3), [0, 1, 2]);
    assert.deepEqual(createArray(5), [0, 1, 2, 3, 4]);

    createArray(3).should.deep.equal([0, 1, 2]);
    createArray(5).should.deep.equal([0, 1, 2, 3, 4]);
  });
});

////////////////////// q3 ////////////////////////

describe("Test 3 objects ", () => {
  it("equality of objects", () => {
    expect(obj1).not.to.equal(obj2);
    expect(obj1).deep.equal(obj2);

    obj1.should.not.to.equal(obj2);
    obj1.should.deep.equal(obj2);

    assert.notEqual(obj1, obj2);
    assert.deepEqual(obj1, obj2);
  });
});

////////////////////// q4 ////////////////////////

describe("Test CheckPositivity Function", () => {
  it("should return true if positive", () => {
    expect(CheckPositivity(4)).to.be.equal(true);
    assert.equal(CheckPositivity(4), true);
    CheckPositivity(4).should.equal(true);
  });
  it("should return false if negative", () => {
    expect(CheckPositivity(-1)).to.be.equal(false);
    assert.equal(CheckPositivity(-1), false);
    CheckPositivity(-1).should.equal(false);
  });
  it("should return false if x = 0", () => {
    expect(CheckPositivity(0)).to.be.equal(false);
    assert.equal(CheckPositivity(0), false);
    CheckPositivity(0).should.equal(false);
  });
});

////////////////////// q5 ////////////////////////

describe("Test Mult Function", () => {
  it("make sure that x > 0 ", () => {
    const x = 2;
    assert.isAbove(x, 0);
  });

  it("make sure that returned number will be above zero", () => {
    assert.isAbove(Mult(5), 0);
  });
});

////////////////////// q6 ////////////////////////

describe("test obj3", () => {
  it("should include {x:1} inside a.b[0]", () => {
    assert.deepInclude(obj3.a.b[0], { x: 1 });
  });
});
