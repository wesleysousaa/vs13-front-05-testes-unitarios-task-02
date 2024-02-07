import { describe, expect, test } from "@jest/globals";
import { sexta } from "./sexta";
describe("Sexta suite de testes", () => {
  test("Verifico se um ano bisexto realmente é bisexto", () => {
    expect(sexta(2024)).toBe("2024 é um ano bissexto.");
  });

  test("Verifico se um ano não bisexto é bisexto", () => {
    expect(sexta(2023)).toBe("2023 não é um ano bissexto.");
  });

  test("Verifico se o retorno realmente é uma string", () => {
    expect(typeof sexta(2023)).toBe("string");
  });

  test("Verifico se irá lançar exceção caso não seja um number", () => {
    expect(() => sexta("a")).toThrow(
      new Error("O argumento deve ser um número")
    );
  });
});
