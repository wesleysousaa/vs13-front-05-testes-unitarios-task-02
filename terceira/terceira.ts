export function terceira(texto: any) {
  if (typeof texto !== "string") throw new Error("Texto precisa ser string");
  switch (texto) {
    case "Sim":
      return "Parabéns";
    case "Não":
      return "Encerrando sua sessão…";
    default:
      return "Você tem noções dos seus atos?";
  }
}
