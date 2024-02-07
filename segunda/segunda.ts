export function segunda(n1: any, n2: any) {
  if (typeof n1 !== "number" || typeof n2 !== "number")
    throw new Error("n1 e n2 precisam ser números");

  return n1 + n2;
}
