import { oitava } from "./oitava";
import { describe, expect, test } from "@jest/globals";

describe("Oitava suite de testes", () => {
  test("Verifico se o calculo está ok", () => {
    expect(
      oitava({ nota: 3, peso: 7 }, { nota: 4, peso: 7 }, { nota: 5, peso: 1 })
    ).toBe("A média ponderada do aluno é: 3.60");
  });

  test("Verifico se lança exceção caso não forneça um objeto em algum argumento", () => {
    expect(() =>
      oitava("{fake objeto}", { nota: 4, peso: 7 }, { nota: 5, peso: 1 })
    ).toThrow(new Error("Os argumentos devem ser um objeto"));
  });

  test("Verifico se lança exceção caso falte algum atributo do objeto ou não seja do tipo correspondente", () => {
    expect(() =>
      oitava(
        { nota: "a", peso: 7 },
        { nota: null, peso: 7 },
        { nota: 5, peso: 1 }
      )
    ).toThrow(new Error("Os argumentos de (nota e peso) devem ser um números"));
  });
});
