import { segunda } from "./segunda";
import { describe, expect, test } from "@jest/globals";

describe("Segunda suite de testes", () => {
  test("Verifico se a soma de 2 e 2 é igual a 4", () => {
    expect(segunda(2, 2)).toBe(4);
  });

  test("Verifico se a soma de 2 e 2 é diferente de 3", () => {
    expect(segunda(4, 2)).not.toBe(3);
  });

  test("Verifico se a soma de 2 e 2 é um número", () => {
    expect(typeof segunda(2, 2)).toBe("number");
  });

  test("Verifico se a soma de 2 e 'a' lança um erro", () => {
    expect(() => segunda(2, "a")).toThrowError("n1 e n2 precisam ser números");
  });
});
