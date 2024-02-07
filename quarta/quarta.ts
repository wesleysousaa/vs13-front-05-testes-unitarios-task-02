export function quarta(cliente: any, atendente: any) {
  if (typeof cliente !== "string" || typeof atendente !== "string")
    throw new Error("cliente E atendente precisam ser string");

  return `Olá ${cliente} eu me chamo ${atendente}, em que posso ajudar?`;
}
