export function setima(operador: any, num1: any, num2: any) {
  if (typeof operador !== "string") throw new Error("Operação inválida");
  if (typeof num1 !== "number" || typeof num2 !== "number")
    throw new Error("Os argumentos de (num1 e num2) devem ser um números");

  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw new Error("Operação inválida");
  }
}
