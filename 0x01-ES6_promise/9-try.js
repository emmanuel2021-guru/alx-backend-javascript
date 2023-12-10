export default function guardrail(mathFunction) {
  const arr = [];
  try {
    arr.push(mathFunction());
  } catch (error) {
    arr.push(`Error: ${error.message}`);
  }
  arr.push('Guardrail was processed');
  return arr;
}
