export function sexta(ano: any) {
  if (typeof ano !== "number")
    throw new Error("O argumento deve ser um número");

  if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0))
    return `${ano} é um ano bissexto.`;
  else return `${ano} não é um ano bissexto.`;
}
