import { describe, test, expect } from "@jest/globals";
import { quarta } from "./quarta";

describe("Quarta suite de testes", () => {
  test("Verifico se a função retorna a frase correta", () => {
    expect(quarta("Wesley", "Pedro")).toBe(
      "Olá Wesley eu me chamo Pedro, em que posso ajudar?"
    );
  });

  test("Verifico se a função retorna uma string", () => {
    expect(typeof quarta("Wesley", "Pedro")).toBe("string");
  });

  test("Verifico se ele lança um erro caso a entrada não seja string", () => {
    expect(() => quarta(2, "Maria")).toThrowError(
      "cliente E atendente precisam ser string"
    );
  });
});
