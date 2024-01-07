export default function hasValuesFromArray(set, array) {
  let result = true;
  for (const item of array) {
    if (item in Array.from(set) === false) {
      result = false;
    }
  }
  return result;
}
