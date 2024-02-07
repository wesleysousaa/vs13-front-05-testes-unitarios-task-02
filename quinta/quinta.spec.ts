import { describe, expect, test } from "@jest/globals";
import { quinta } from "./quinta";

describe("Quinta suite de testes", () => {
  test("Verifico se a função retorna a frase correta com base no valor passado", () => {
    expect(quinta(200000)).toBe(
      "Em 200000 segundos temos: 2 dias, 7 horas, 33 minutos e 20 segundos."
    );
  });

  test("Verifico se a função retorna uma string", () => {
    expect(typeof quinta(200000)).toBe("string");
  });

  test("Verifico se ele lança um erro caso a entrada não seja um número", () => {
    expect(() => quinta("s")).toThrowError("O argumento deve ser um número");
  });
});
