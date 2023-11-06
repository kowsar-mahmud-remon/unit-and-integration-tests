import { it, expect } from "vitest";
import { add } from "./math";


it("should return the correct sum if an array of number is provided", () => {
  //simple way
  // const result = add([1, 2, 3]);
  // expect(result).toBe(6);

  // AAA way 
  // Arrange
  const number = [1, 2, 3];

  const expertedResult = number.reduce((acc, cur) => acc + cur);

  // Action
  const result = add(number);

  // Assertion
  expect(result).toBe(expertedResult);

});


it("it should provide NaN if at least one invalid number is provided", () => {

  // Arrange
  const number = [1, "invalid", 3];

  // Action
  const result = add(number);

  // Assertion
  expect(result).toBeNaN();

});

it("it should provide correct sum if an array numeric string is provided", () => {

  // Arrange
  const number = ["1", "2", "3"];

  const expertedResult = number.reduce((acc, cur) => +acc + +cur);

  // Action
  const result = add(number);

  // Assertion
  expect(result).toBe(expertedResult);

});

it("it should throw an error if no argument is passed", () => {

  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();

});

it("it should throw an error if multiple argument is passed", () => {

  const resultFn = () => {
    add(1, 2, 3);
  };
  expect(resultFn).toThrow(/is not iterable/i);

})

