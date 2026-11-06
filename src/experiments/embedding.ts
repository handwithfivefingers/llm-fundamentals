
function cosineSimilarity(a: number[], b: number[]) {
  const dot = a.reduce((s, x, i) => s + x * b[i], 0);
  const norm = (v: number[]) =>
    Math.sqrt(v.reduce((s, x) => s + x * x, 0));

  const denominator = norm(a) * norm(b);
  if (denominator === 0) throw new Error("Zero vector");

  return dot / denominator;
}

console.log(cosineSimilarity([1, 2, 3], [2, 4, 6]));
console.log(cosineSimilarity([1, 0, 0], [0, 1, 0]));