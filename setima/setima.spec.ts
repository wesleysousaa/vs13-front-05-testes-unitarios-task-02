import { setima } from "./setima";
import { describe, expect, test } from "@jest/globals";

describe("Sétima suite de testes", () => {
  test("Verifico se a soma está ok", () => {
    expect(setima("+", 2, 2)).toBe(4);
  });

  test("Verifico se a subtração está ok", () => {
    expect(setima("-", 2, 2)).toBe(0);
  });

  test("Verifico se a divisão está ok", () => {
    expect(setima("/", 2, 2)).toBe(1);
  });

  test("Verifico se a multiplicação está ok", () => {
    expect(setima("*", 2, 2)).toBe(4);
  });

  test("Verifico se está lançando erro com o operador que não é string", () => {
    expect(() => setima(1, 2, 2)).toThrow(new Error("Operação inválida"));
  });

  test("Verifico se está lançando erro com o num1 que não é número", () => {
    expect(() => setima("+", "a", 2)).toThrow(
      new Error("Os argumentos de (num1 e num2) devem ser um números")
    );
  });

  test("Verifico se está lançando erro com o num2 que não é número", () => {
    expect(() => setima("+", 2, "a")).toThrow(
      new Error("Os argumentos de (num1 e num2) devem ser um números")
    );
  });

  test("Verifico se está lançando erro com o operador que não foi mapeado", () => {
    expect(() => setima("%", 2, 2)).toThrow(new Error("Operação inválida"));
  });
});
