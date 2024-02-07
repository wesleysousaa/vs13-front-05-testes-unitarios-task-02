export function quinta(segundos: any) {
  if (typeof segundos !== "number")
    throw new Error("O argumento deve ser um número");

  let segundosVariaveis = segundos;

  const dias = Math.floor(segundosVariaveis / (60 * 60 * 24));
  segundosVariaveis %= 60 * 60 * 24;

  const horas = Math.floor(segundosVariaveis / (60 * 60));
  segundosVariaveis %= 60 * 60;

  const minutos = Math.floor(segundosVariaveis / 60);
  const segundosRestantes = segundosVariaveis % 60;

  return `Em ${segundos} segundos temos: ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundosRestantes} segundos.`;
}
