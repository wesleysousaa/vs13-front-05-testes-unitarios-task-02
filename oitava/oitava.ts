export function oitava(nota1: any, nota2: any, nota3: any) {
  if (
    typeof nota1 !== "object" ||
    typeof nota2 !== "object" ||
    typeof nota3 !== "object"
  )
    throw new Error("Os argumentos devem ser um objeto");

  if (
    typeof nota1.nota !== "number" ||
    typeof nota2.nota !== "number" ||
    typeof nota3.nota !== "number" ||
    typeof nota1.peso !== "number" ||
    typeof nota2.peso !== "number" ||
    typeof nota3.peso !== "number"
  )
    throw new Error("Os argumentos de (nota e peso) devem ser um números");

  const pesoTotal: number = nota1.peso + nota2.peso + nota3.peso;
  const notaComPeso: number =
    nota1.nota * nota1.peso + nota2.nota * nota2.peso + nota3.nota * nota3.peso;

  const media: number = notaComPeso / pesoTotal;
  return `A média ponderada do aluno é: ${media.toFixed(2)}`;
}
