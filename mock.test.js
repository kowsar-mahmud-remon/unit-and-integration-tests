import { expect, it, vi } from "vitest";
import { saveTokenToFile } from "./mock";
import { promises as fs } from 'fs';

vi.mock("fs");

it("should store the token to the file", () => {
  const data = "dummy token";
  const fileName = "token.txt";

  saveTokenToFile(data, fileName);

  expect(fs.writeFile).toHaveBeenCalled();
});


// 

vi.mock("path");

it("should store the token to the file and check file name", () => {
  const data = "dummy token";
  const fileName = "token.txt";

  saveTokenToFile(data, fileName);

  expect(fs.writeFile).toBeCalledWith(fileName, data);
});


