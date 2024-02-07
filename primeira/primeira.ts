export function primeira(mensagem: any) {
  if (typeof mensagem !== "string")
    throw new Error("O argumento deve ser uma string");
  return mensagem;
}
