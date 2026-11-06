import { getEncoding } from "js-tiktoken";
const encoder = getEncoding("o200k_base");

const samples = [
  "Hello, how are you?",
  "Xin chào, bạn khỏe không?",
  "const sum = (a: number, b: number) => a + b;",
  "🚀 AI is amazing!",
];

for (const text of samples) {
  const ids = encoder.encode(text);

  console.log({
    text,
    characters: text.length,
    tokens: ids.length,
    ids,
    decoded: encoder.decode(ids),
  });
}
