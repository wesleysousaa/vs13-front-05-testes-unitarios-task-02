import { describe, test, expect } from "@jest/globals";
import { terceira } from "./terceira";

describe("Terceira suite de testes", () => {
  test("Verifico se a sim vai retornar: parabéns", () => {
    expect(terceira("Sim")).toBe("Parabéns");
  });

  test("Verifico se não vai retornar: Encerrando sua sessão…", () => {
    expect(terceira("Não")).toBe("Encerrando sua sessão…");
  });

  test("Verifico se outra palavra vai retornar: Você tem noções dos seus atos?", () => {
    expect(terceira("Nunca")).toBe("Você tem noções dos seus atos?");
  });

  test("Verifico se o retorno é uma string", () => {
    expect(typeof terceira("Sim")).toBe("string");
  });

  test("Verifico se ele lança um erro caso a entrada não seja string", () => {
    expect(() => terceira(2)).toThrowError("Texto precisa ser string");
  });
});
