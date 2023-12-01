export default function appendToEachArrayValue(array, appendString) {
  const arrayCpy = [];
  for (const val of array) {
    arrayCpy.push(appendString + val);
  }

  return arrayCpy;
}
