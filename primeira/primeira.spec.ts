import { describe, expect, test } from "@jest/globals";
import { primeira } from "./primeira";

describe("Primeira suite de testes", () => {
  test("Verifico se a string passada é igual ao retorno", () => {
    expect(
      primeira(
        "**********************\nBEM-VINDO AO MEU PROGRAMA\n**********************\nELE REALMENTE FUNCIONAN**********************NEU USEI FUNÇÃO PARA FAZER ISSO"
      )
    ).toBe(
      "**********************\nBEM-VINDO AO MEU PROGRAMA\n**********************\nELE REALMENTE FUNCIONAN**********************NEU USEI FUNÇÃO PARA FAZER ISSO"
    );
  });

  test("Verifico se a string passada é diferente do retorno", () => {
    expect(
      primeira(
        "**********************\nBEM-VINDO AO MEU PROGRAMA\n**********************\nELE REALMENTE FUNCIONAN**********************NEU USEI FUNÇÃO PARA FAZER ISSO"
      )
    ).not.toBe(
      "**********************\nBEM-VINDO AO MEU PROGRAMA\n**********************\nELE REALMENTE FUNCIONAN**********************NEU USEI FUNÇÃO PARA FAZER ISSO\n"
    );
  });

  test("Verifico se o retorno é uma string", () => {
    expect(
      typeof primeira(
        "**********************\nBEM-VINDO AO MEU PROGRAMA\n**********************\nELE REALMENTE FUNCIONAN**********************NEU USEI FUNÇÃO PARA FAZER ISSO"
      )
    ).toBe("string");
  });

  test("Verifico se vai lançar erro do argumento inválido", () => {
    expect(() => typeof primeira(1)).toThrow(
      new Error("O argumento deve ser uma string")
    );
  });
});
