import { expect, it } from "vitest";
import { validateEmail } from "./validation";

it("should validate a correct email address", () => {
  const email = "example@gmail.com";
  const resultFn = () => validateEmail(email);

  expect(resultFn).not.toThrow();
});

it("should throw an error if an invalid email is passed", () => {
  const email = "example";
  const resultFn = () => validateEmail(email);

  expect(resultFn).toThrow();
});

it("should throw an error if an empty string is passed", () => {
  const email = "";
  const resultFn = () => validateEmail(email);

  expect(resultFn).toThrow();
});

it("throws an error for a null email address", () => {
  expect(() => validateEmail(null)).toThrow('Invalid email address');
});

it("throws an error for a undefined email address", () => {
  expect(() => validateEmail(undefined)).toThrow("Invalid email address");
});